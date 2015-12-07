"use strict"

var callForExternal = require("./external");	// bind external file
var callExternalConstruct = require("./externalFunc");	// bind external function constructor
var CallNewExternalConstruct = require("./externalConstruct");	// bind external constructor
var greetLib = require("./lib");	// bind external lib

callForExternal["firstName"] = "Oleg";	// change property in external file
callForExternal.sayHello();	// call external method

callExternalConstruct.greet();	// call external prototype method

var externalConstruct = new CallNewExternalConstruct("Serg", "Mal"); // create new obj
externalConstruct.greet();	// call new obj

greetLib.english();	// call external lib
greetLib.spanish();	// call external lib