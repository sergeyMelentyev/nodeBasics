"use strict"
// npm init : specify a working directory and create json npm file
// npm install <repName> --save : install dependency and add info into npm json
// npm install : download all dependences from json npm file

var callForExternal = require("./external");	// bind external file
var callExternalConstruct = require("./externalFunc");	// bind external function constructor
var CallNewExternalConstruct = require("./externalConstruct");	// bind external constructor
var greetLib = require("./lib");	// bind external lib
var util = require("util");	// call native(core) module
var Emitter = require("./emitter"); //call emitter constructor
var CoreEmitter = require("events");

callForExternal["firstName"] = "Oleg";	// change property in external file
callForExternal.sayHello();	// call external method

callExternalConstruct.greet();	// call external prototype method

var externalConstruct = new CallNewExternalConstruct("Serg", "Mal"); // create new obj
externalConstruct.greet();	// call new obj

greetLib.english();	// call external lib
greetLib.spanish();	// call external lib

var emtr = new Emitter();	// create a custom event emiter
emtr.on("greet", function(){	// listen to event and execute a function
	console.log("Event emiter fire");
});
emtr.emit("greet");	// emit (create) an event

var coreEmtr = new CoreEmitter();	// create a core build-in emitter
coreEmtr.on("greetings", function(){
	console.log("Core event lib fire");
});
coreEmtr.emit("greetings");