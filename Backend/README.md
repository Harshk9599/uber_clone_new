# Backend API — Users

## POST /users/register

Registers a new user and returns an authentication token and the created user object.

- **Endpoint:** `POST /users/register`
- **Headers:** `Content-Type: application/json`
- **Success Status:** `201 Created`

### Description

Creates a new user in the database. The endpoint validates the incoming payload and hashes the password before storing. On success it returns a JWT `token` and the created `user` (password is not returned).

### Request Body

Content type: `application/json`

Required fields:

- `fullname.firstname` (string) — required, minimum 3 characters.
- `email` (string) — required, must be a valid email address.
- `password` (string) — required, minimum 6 characters.

Optional fields:

- `fullname.lastname` (string) — optional, recommended minimum 3 characters.

Example request:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "s3cr3tpass"
}
```

### Responses

- `201 Created` — User created successfully.

  Example success response:

  ```json
  {
    "token": "<jwt_token_here>",
    "user": {
      "_id": "609d9f9f9f9f9f9f9f9f9f9f",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null
    }
  }
  ```

- `400 Bad Request` — Validation failed (missing/invalid fields). Response contains an `errors` array produced by `express-validator`.

  Example:

  ```json
  {
    "errors": [
      { "msg": "Invalid Email Address", "param": "email", "location": "body" },
      { "msg": "Password must be at least 6 characters long", "param": "password", "location": "body" }
    ]
  }
  ```

- `409 Conflict` — Email already exists (may be returned by the database). Implementation may return a `500` depending on error handling; consider adding explicit duplicate-check handling in the service for a consistent `409` response.

- `500 Internal Server Error` — Unexpected errors.

### Notes

- The server hashes passwords using bcrypt before saving. The controller calls `userModel.hashPassword()` and the model stores the hashed password (the `password` field is excluded by default when returning documents).
- Validation rules are applied in the route using `express-validator` (see `routes/user.routes.js`).

If you want, I can also add an example curl command or update the route handler to return a consistent `409` on duplicate emails.
