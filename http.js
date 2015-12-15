"use strick";

var http = require("http");
var fs = require("fs");
var path = require('path');
var url = require('url');
var port = process.env.PORT || 8080;

// Array of Mime Types
var mimeTypes = {
    "html" : "text/html",
    "css" : "text/css",
    "js" : "text/javascript",
    "json" : "application/json",
    "jpg" : "image/jpeg",
    "jpeg" : "image/jpeg",
    "png" : "image/png",
};

// Create a Server
http.createServer(function(req, res){
   var uri = url.parse(req.url).pathname;
   var fileName = path.join(process.cwd(), uri);
   var stats;
   
   try {
       stats = fs.lstatSync(fileName);
   } catch (error) {
       console.log(error);
       res.writeHead(404, {'Content-Type': 'text/plain'});
       res.write('404 Not Found \n');
       res.end();
       return;
   }
   
   // Check if file/directory
   if(stats.isFile()){
       var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
       res.writeHead(200, {'Content-Type': mimeType});
       var fileStream = fs.createReadStream(fileName);
       fileStream.pipe(res);
   } else if (stats.isDirectory()){
       res.writeHead(302, {
           "Location": "index.htm"
       });
       res.end();
   } else {
       res.writeHead(500, {'Content-Type': 'text/plain'});
       res.write("500 Internal Error \n");
       res.end();
   }
}).listen(port);