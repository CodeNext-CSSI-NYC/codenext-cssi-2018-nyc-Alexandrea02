//Author- Alexandrea Jackson 
readline = require("readline-sync");

// 1a. Write (declare) a function that prints out "meow"
//  function declare() {
//  	console.log("meow");
//  } 
//  	declare();

// // 1b. Call it three times in a row. Run your code to make sure it works.
// 	function declare3() {
// 		declare();
// 		declare();
// 		declare();
// 	}
// 		declare3();


// // 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// 	function declare(int) {
// 		let number = readline.question("pick a number: ");
//  		let answer= Math.sqrt(number);
// 		console.log(answer);
// 	}
// 		declare(int);


// // 2b. Call it three times with three different parameters. Run your code to make sure it works.

// 	function three(int,int,int) {
// 		declare(int);
// 		declare(int);
// 		declare(int);
// 	}
// 	three(int,int,int);
// 	//(go over)

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
		

	let number1 = parseInt(readline.question("pick a number: "));
 	let number2= parseInt(readline.question("pick a number: "));

 	function greater(number1,number2) {
 		// let number1 = readline.question("pick a number: ");
 		// let number2= readline.question("pick a number: ");
 		
 	if (number1 > number2) {
 		console.log( number1 + " is greater than " + number2 );
 }
 	else if (number1< number2) {
 		console.log( number2 + " is greater than " + number1 );
 }
    }

 // }
 // 	greater(number1,number2);

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
 let one= parseInt(readline.question("pick a number: "));
 let two = parseInt(readline.question("pick a number: "));
 let three = parseInt(readline.question("pick a number: "));

 function greater3(one,two,three) {
 	greater();
 }
  greater3(one,two,three);



// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?