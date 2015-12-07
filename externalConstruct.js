"use strick"

// function constructor
function NewPersonConstactor(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
};

// function prototype, adding new functionality to constractor
NewPersonConstactor.prototype.greet = function(){
	console.log("Call from external constructor. Hello, " + this.firstname + " " + this.lastname);
};

module.exports = NewPersonConstactor;