var greetings = require("./greetings.json");

var greetLib = function(){
	console.log(greetings.en);
};

module.exports = greetLib;