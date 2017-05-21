function foo() {
	console.log("Hello");
}

foo();

//declare a function called bar with parameter called name
function bar(name) {
	console.log("hello " + name)
}
//call the function named 'bar' with an argument 'Marvin' (string)
bar('Marvin');

function sum(a, b) {
	console.log(a + b);
}

sum(4, 5)


function yellSomething(something) {
	return something.toUpperCase();
}

var chicken = yellSomething("piglet")
console.log(chicken);