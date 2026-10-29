// Date Exercise

var date = new Date();

// get the month, day and year
var month = date.getMonth() + 1; // months start at 0
var day = date.getDate();
var year = date.getFullYear();

// add a 0 in front if it's a single digit
var mm = month < 10 ? "0" + month : month;
var dd = day < 10 ? "0" + day : day;

console.log("Today is " + mm + "/" + dd + "/" + year + ".");

document.body.innerHTML = "<h1>Today is " + mm + "/" + dd + "/" + year + ".</h1>";
