// Date Exercise

var date = new Date();
console.log("Before: Today is " + date);

// get the month, day and year
var month = date.getMonth() + 1; // months start at 0
var day = date.getDate();
var year = date.getFullYear();

// add a 0 in front if it's a single digit
var mm = month < 10 ? "0" + month : month;
var dd = day < 10 ? "0" + day : day;

var readable = "Today is " + mm + "/" + dd + "/" + year + ".";
console.log("After: " + readable);

document.body.innerHTML = "<p>Before: Today is " + date + "</p>" + "<h1>" + readable + "</h1>";
