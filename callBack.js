"use strick"

function greet(callBack){
	console.log("Hello World");
	var data = {
		name: "Sergey Melentyev"
	};
	callBack(data);
};

greet(function(data){
	console.log("The first callback");
	console.log(data);
});
greet(function(data){
	console.log("The second callback");
	console.log(data.name);
});