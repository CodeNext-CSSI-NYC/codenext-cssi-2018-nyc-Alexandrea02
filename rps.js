//AUthor- ALexandrea Jackson

readline = require("readline-sync");

let people = readline.question(" for rock press 1, for paper push 2, or for scissors push 3: ");

const compNum = Math.random() * 3;


	if(compNum<=1) {
	console.log("The computer chose rock");
}
	else if(compNum<=2) {
		console.log("The computer chose paper");
	}

	else if (compNum<=3) {
		console.log("The computer chose scissors");
	}

	if(people==compNum){
		console.log("there is a tie");
	}
	else if(people>compNum){
		console.log("you win");
	}

	else if(people<compNum){
		console.log("you lose");
	}
