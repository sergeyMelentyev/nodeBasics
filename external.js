"use strick"

var person = {
	firstName: "Sergey",
	lastName: "Melentyev",
	sayHello: function(){
		console.log("My name is " + this.firstName + " ");	
	}
};


module.exports = person; // make external lib visible