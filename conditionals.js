//Author: ALexandrea Jackson
readline = require("readline-sync");

	// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// // 1. Ask the user for a number and print whether it is positive or negative or zero.
// 	let num = readline.question("please enter a number: ");

// 	if(num > 0) {
// 	console.log("your number is positive");
// }
// 	else if(num < 0 ) {
// 		console.log("your number is negative");
// }
// 	else {
// 		console.log("your number is zero");
// 	}


// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
	// console.log("please enter three numbers");
	// let num1 = readline.question("please enter the first number: ");

	// let num2 = readline.question("please enter the second number: ");
	
	// let num3 = readline.question("please enter the third number: ");

	// 	if( num1 > num2 && num1> num3) {
	// 		console.log("The largest number you entered is " + num1 );
	// }

	// 	else if( num2>num1 && num2>num3) {
	// 		console.log("The largest number you entered is " + num2);
	// }

	// 	else if( num3>num2 && num3>num1) {
	// 		 console.log("The largest number you entered is " + num3 );
	// } 
	//CHECK THIS AGAIN


// 3. Ask the user for a number and print whether it is odd or even

	// let number = readline.question("please enter a number: ");

	// if(number % 2 == 0) {
	// 	console.log("your number is even");
	// }

	// else {
	// 	console.log("your number is odd");
	// }


// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
 // let letter = readline.question("enter a letter: ");
 
 // 	if(letter== "a" ) {
 // 	console.log("Your letter is a vowel");
 // }
	//  else if(letter== "e" ) {
 // 	console.log("Your letter is a vowel");
 // }
 // 	else if(letter== "i" ) {
 // 	console.log("Your letter is a vowel");
 // }
 // 	else if(letter== "o" ) {
 // 	console.log("Your letter is a vowel");
 // }
 // 	else if(letter== "u" ) {
 // 	console.log("Your letter is a vowel");
 // }
 // 	else{
 // 		console.log("your letter is a consonant");
 // 	}


// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
	let year = readline.question("please enter a year: "); 
	
	if (year% 4 && year%400 && year%100 == 0) {
	console.log("This year was a leap year");
}
	else{
	console.log("this year was not a leap year");
}
 
  //check this) 

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
let citizen = readline.question("have you been a citizen for atleast 9 years? ");



// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.











