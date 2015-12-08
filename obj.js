"use strict"
var EventEmmiter = require("events"); // add core lib for events
var util = require("util"); // add core lib for utility

// Object creation via prototype chain
var animal = { name: "",
	age: "",
	greet: function() {
		return this.name + " " + this.age;
	}
};
var firstAnimal = Object.create(animal);
firstAnimal.name = "Bear";
firstAnimal.age = "33";
console.log(firstAnimal.greet());

// Object creation with inheritance from core libs
function Greetr() {
	this.greeting = "Hello World";
};
util.inherits(Greetr, EventEmmiter); // Make Greetr inherits props and methods from core lib
Greetr.prototype.greet = function(data) {	// Add new method via prototyping
	console.log(this.greeting + ": " + data);
	this.emit("greet", data);	// Add event emitter with data
};
var greeterOne = new Greetr();
greeterOne.on("greet", function(data){
	console.log("Someone greeted!" + ": " + data);
});
greeterOne.greet("Sergey");

// Object creation with inheritance from another object
function Person(){
	this.firstName = "Sergey",
	this.lastName = "Melentyev"
};
Person.prototype.greetGreet = function(){
	console.log("Hello " + this.firstName + " " + this.lastName);
};
function Policeman(){
	Person.call(this);	//make this. point to Person, other way undefined
	this.badgenumber = "1234";
};
util.inherits(Policeman, Person); // Make Policeman inherits props and methods from Person
var officer = new Policeman();
officer.greetGreet();

