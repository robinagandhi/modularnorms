var express = require('express');
var path = require("path");
var logger = require("morgan");

var app = express();

app.use(logger("short"));

var publicPath = path.resolve(__dirname,"public");
app.use(express.static(publicPath));
app.use( (request,response) => {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("No such file found");
    
    
});

app.listen(3000,()=>{console.log("Server is up!!!")} );
