//author: ALexandrea Jackson


	readline = require("readline-sync");

	let num =readline.question("heads or tails?: ");

	let heads = Math.random() < 0.5;
	let tails = Math.random() > 0.5;

	if(num == heads ) {
 	console.log("Heads you were correct!");
}
	else if(num== tails ) {
		console.log("tails! you were correct ");
}