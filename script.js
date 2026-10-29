// make a variable that holds the current date and time
// if you console.log this by itself you get the long version like "Thu Oct 29 2026 14:40:58 GMT-0700"
var date = new Date();

// get the month, day and year separately (looked these up on MDN)
var month = date.getMonth() + 1; // months start at 0 so january is 0, have to add 1
var day = date.getDate();        // day of the month, not getDay() because that gives the day of the week
var year = date.getFullYear();   // full 4 digit year

// add a 0 in front if it's a single digit so it stays MM/DD (like 3 becomes 03)
// using the ternary operator: condition ? if true : if false
// "0" + month works because adding a string to a number just sticks them together
var mm = month < 10 ? "0" + month : month;
var dd = day < 10 ? "0" + day : day;

// print it in the console to check it works
console.log("Today is " + mm + "/" + dd + "/" + year + ".");

// put it on the actual page inside an h1
document.body.innerHTML = "<h1>Today is " + mm + "/" + dd + "/" + year + ".</h1>";
