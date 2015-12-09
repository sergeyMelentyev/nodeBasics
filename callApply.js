"use strict";

var obj = {
	name: "Sergey Melentyev",
	greet: function(age, birth){
		console.log("Hello " + this.name + " " + age);	// this. points to a parent obj
	}
};

obj.greet(33, "anyString");
obj.greet.call({ name: "Oleg Melentyev" }, 41, "newString"); // overwrite this. to a new property
obj.greet.apply({ name: "Oleg Melentyev" }, [41, "NewString"]); // overwrite this. to a new property
