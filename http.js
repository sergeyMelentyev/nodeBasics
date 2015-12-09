"use strick";

var http = require("http");
var fs = require("fs");
var port = process.env.PORT || 8080;	// if server port exist or local host

http.createServer(function(req, res){
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/index.htm").pipe(res);	// response with streams (chunks)
	} else if (req.url === "/api") {
		res.writeHead(200, { "Content-Type": "application/json" });
		var obj = {
			firstName: "Sergey",
			lastName: "Melentyev"
		};
		res.end(JSON.stringify(obj));
	} else {
		res.writeHead(404);	// responce for incorrect url
		res.end();
	}
}).listen(port);