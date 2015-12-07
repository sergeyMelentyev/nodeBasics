"use strict"

var callForExternal = require("./external");	// bind external file
var callExternalConstruct = require("./externalFunc");	// bind external function constructor
var greetLib = require("./lib");	// bind external lib

callForExternal["firstName"] = "Oleg";	// change property in external file
callForExternal.sayHello();	// call external method

callExternalConstruct.greet();	// call external prototype method

greetLib.english();	// call external lib
greetLib.spanish();	// call external lib