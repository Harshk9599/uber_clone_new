const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;



const server = http.createServer(app);



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



if (let a = 1; a<6; a++) {
    
    
}