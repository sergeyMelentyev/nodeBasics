"use strick"

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/index.htm").pipe(res);	// response with streams (chunks)
	}
	if (req.url === "/api") {
		res.writeHead(200, { "Content-Type": "application/json" });
		var obj = {
			firstName: "Sergey",
			lastName: "Melentyev"
		};
		res.end(JSON.stringify(obj));
	}
}).listen(8080, "127.0.0.1");