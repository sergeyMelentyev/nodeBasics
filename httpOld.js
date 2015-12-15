"use strick";

var http = require("http");
var fs = require("fs");
var path = require('path');
var url = require('url');
var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
    var filePath = '.' + request.url;
    if (filePath === './') {
		fs.createReadStream(__dirname + "/index.htm").pipe(response);
    } else if (filePath === "./api") {
		var obj = {
			firstName: "Sergey",
			lastName: "Melentyev"
		};
		response.end(JSON.stringify(obj));
	}
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript';
            break;
        case '.css': contentType = 'text/css';
            break;
        case '.json': contentType = 'application/json';
            break; 
        case '.png': contentType = 'image/png';
            break;      
        case '.jpg': contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(port);