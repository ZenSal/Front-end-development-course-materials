//import http library
const http = require("http");

//create server
http.createServer((req, res) =>{
    res.end("My testing server");
}).listen(255);
