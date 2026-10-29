// CIT 384 - Week 9 Date Exercise
// Goal: turn the raw Date output from slide 16 into "Today is MM/DD/YYYY."

// Same starting point as slide 16
var date = new Date();
console.log("Before: Today is " + date);

// Pull out each piece of the date (MDN: Date getter methods)
var month = date.getMonth() + 1;   // getMonth() counts from 0 (January = 0), so add 1
var day = date.getDate();          // getDate() is the day of the month (1-31); getDay() would be the weekday
var year = date.getFullYear();     // getFullYear() gives all 4 digits

// Add a leading zero so single digits still fit the MM and DD format (3 -> "03")
var mm = String(month).padStart(2, "0");
var dd = String(day).padStart(2, "0");

var readable = "Today is " + mm + "/" + dd + "/" + year + ".";
console.log("After:  " + readable);

// Show the before and after on the page too
document.getElementById("before").textContent = "Today is " + date;
document.getElementById("after").textContent = readable;
