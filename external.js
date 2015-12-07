"use strick"

var person = {
	firstName: "Sergey",
	lastName: "Melentyev",
	sayHello: function(){
		console.log("Call fron external file. My name is " + this.firstName + " ");	
	}
};

module.exports = person; // make external file visible