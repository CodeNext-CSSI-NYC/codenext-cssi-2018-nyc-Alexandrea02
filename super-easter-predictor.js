// Author: FirstName LastName
let readline = require("readline-sync");

console.log("Welcome to the Easter day identifier");

let y= readline.question("please pick a year after 1583: ");
console.log(y);

let a = y % 19;
let b = Math.floor(y / 100);
let c = y % 100;
// console.log(y, a, b, c);
let d = Math.floor(b / 4);
let e = b % 4;
let f = Math.floor((b + 8) / 25);
let g = Math.floor((b - f + 1) / 3);
let h = (19 * a + b - d - g + 15) % 30;
let i = Math.floor(c / 4);
let k = c % 4;
let r = (32 + 2 * e + 2 * i - h - k) % 7;
let m = Math.floor((a + 11 * h + 22 * r) / 451);
let n = Math.floor((h + r - 7 * m + 114) / 31);
let p = (h + r - 7 * m + 114) % 31;
let day = p + 1;
let month = n;
console.log("This year Easter is on " + month + "/" + day);
console.log("thank you for using the Easter Day identifier");