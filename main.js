/* Exercise #3
Objective: Implement Closures in JavaScript.

Instructions:

Develop a JavaScript function that returns another function.
The inner function should have access to variables from the outer function's scope. */

function outer() {
	let myVariable = 'Outer Function Scoped Variable';

	function inner() {
		console.log('myVariable inside inner function:', myVariable);
	}

	inner();
}

outer(); // Prints: myVariable inside inner function: Outer Function Scoped Variable



