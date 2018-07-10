// Author: Alexandrea Jackson 
readline = require("readline-sync");
console.log("hello welcome to the change converter");

let x = readline.question("please enter your amount of cents: ");

let pennies= Math.floor(x%100);
let quarters = Math.floor(x/25);
let dimes= Math.floor(x/10);
let nickles= Math.floor(x/5);

console.log("If you have " + x + " cents then you will recieve "); 
console.log(pennies + " pennies");
console.log(nickles + " nickles");
console.log(dimes + " dimes");
console.log(quarters + " quarters");