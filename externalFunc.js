"use strick";

// function constructor
function PersonConstactor(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
};

// function prototype, adding new functionality to constractor
PersonConstactor.prototype.greet = function(){
	console.log("Call from external function constructor. Hello, " + this.firstname + " " + this.lastname);
};

module.exports = new PersonConstactor("Sergey", "Melentyev");