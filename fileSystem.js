"use strick"

var fs = require("fs");

var greetOne = fs.readFileSync(__dirname + "/greet.txt", "utf8");
console.log(greetOne);

var greetTwo = fs.readFile(__dirname + "/greet.txt", "utf8", function(err, data){
	console.log(data);
});