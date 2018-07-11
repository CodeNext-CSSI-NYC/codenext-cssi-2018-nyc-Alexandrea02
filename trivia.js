//Author; Alexandrea Jackson

readline = require("readline-sync");

console.log("welcome to Brand trivia");

let one = readline.question("What fast food brand has a King?: ");

	if(one == "burger king"){
	console.log("you are correct");
}
	else {
	console.log("You are incorrect, the correct answer was burger king");
}

let two = readline.question("what ice cream shop has a queen?: ");

	if(two == "diary queen"){
	console.log("you are correct");
}
	else {
	console.log("You are incorrect, the correct answer was diary queen");
}

	