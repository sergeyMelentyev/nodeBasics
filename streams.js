"use strict";

var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/greet.txt", { 
	encoding: "utf8", highWaterMark: 16 * 1024 });	// add chunk size
var writeable = fs.createWriteStream(__dirname + "/greetCopy.txt");

readable.on("data", function(chunk){	// emit on every chunk complete
	console.log(chunk.length);
	writeable.write(chunk);
});