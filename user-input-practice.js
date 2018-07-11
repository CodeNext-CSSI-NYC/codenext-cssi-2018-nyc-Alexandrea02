//Author: Alexandrea Jackson
let readline = require("readline-sync");

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
//console.log("The square root of " + num "is " static int floorSqrt(num));
let num = readline.question("Please enter a number: ");
console.log("the square root of " + num  + " is" + Math.sqrt(num) );

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
//console.log("Your name has " + letters "letters");
 let letters= parseInt(readline.question("please enter your name : "));
console.log("your name has" + letters + "letters" + str.length(letters));

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
let word= readline.question("Please enter a word: ");
console.log("the word " + word  + "starts with the letter " + str.charAt(word));

// 4. Ask the user to enter two numbers, and print out "The average of ___ and
// ___ is ____", but with the blanks filled in.
let number1 = readline.question("Please enter a number: ");
let number2 = readline.question("Please enter another number: ");

console.log("The average of " + number1 + "and" + number2 + "is " + (number1+number2)/2 );