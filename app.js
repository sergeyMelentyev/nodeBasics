"use strict"

var callForExternal = require("./external"); // bind external lib
var greetLib = require("./lib");

callForExternal["firstName"] = "Oleg";
callForExternal.sayHello();

// function constructor
function PersonConstactor(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
};
// function prototype, adding new functionality to constractor
PersonConstactor.prototype.greet = function(){
	console.log("Hello, " + this.firstname + " " + this.lastname);
};

var sergey = new PersonConstactor("Sergey", "Melentyev");
sergey.greet();

greetLib.english();
greetLib.spanish();