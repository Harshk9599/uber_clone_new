// const dotenv = require('dotenv');
// dotenv.config();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const connectToDb = require('./db/db');

// connectToDb();


// app.use(cors());

// app.get('/', (req, res) =>{
//     res.send('Hello World');
// });

// module.exports = app; 

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");


connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);



app.get("/", (req,res) =>{
    res.send("Hello again on may 2026");
});





module.exports = app;