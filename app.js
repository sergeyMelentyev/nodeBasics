"use strict"

var callForExternal = require("./external");	// bind external file
var callExternalConstruct = require("./externalFunc");	// bind external function constructor
var CallNewExternalConstruct = require("./externalConstruct");	// bind external constructor
var greetLib = require("./lib");	// bind external lib
var util = require("util");	// call native(core) module
var Emitter = require("./emitter"); //call emitter constructor

callForExternal["firstName"] = "Oleg";	// change property in external file
callForExternal.sayHello();	// call external method

callExternalConstruct.greet();	// call external prototype method

var externalConstruct = new CallNewExternalConstruct("Serg", "Mal"); // create new obj
externalConstruct.greet();	// call new obj

greetLib.english();	// call external lib
greetLib.spanish();	// call external lib

var emtr = new Emitter();	// create new obj
emtr.on("greet", function(){	// listen to event and execute a function
	console.log("Event emitter fire");
});
emtr.emit("greet");	// emit event