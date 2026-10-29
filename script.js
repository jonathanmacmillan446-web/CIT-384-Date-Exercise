// CIT 384 - Week 9 Date Exercise
// Goal: turn the raw Date output from slide 16 into "Today is MM/DD/YYYY."

// Same starting point as slides 15-16
var date = new Date();
console.log("Before: Today is " + date);

// Pull out each piece of the date (MDN Date reference from slide 55)
var month = date.getMonth() + 1;   // months are 0-indexed (January = 0), so add 1
var day = date.getDate();          // day of the month (1-31); getDay() would be the weekday (0-6)
var year = date.getFullYear();     // 4-digit year

// Add a leading zero to single digits with the ternary operator (slide 54)
// condition ? true statement : false statement
var mm = month < 10 ? "0" + month : month;
var dd = day < 10 ? "0" + day : day;

// The + joins strings together (slide 45)
var readable = "Today is " + mm + "/" + dd + "/" + year + ".";
console.log("After: " + readable);

// Write the before and after into the page body (slide 18)
document.body.innerHTML = "<p>Before: Today is " + date + "</p>" + "<h1>" + readable + "</h1>";
