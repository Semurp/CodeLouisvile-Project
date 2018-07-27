/*
This script runs a function that will randomly choose a quote from the array below. It is based off of the total numbers of quotes provided.
*/


var quotes = ['Its Like I Always Say, Gravity Isnt Real. You\'re Welcome. -Jaden Smith',
'FYI Haters, You Can\'t Fail Something You Don\'t Believe In -Jaden Smith',
'Experience Is A Choice. -Jaden Smith','Trees Be All Like Understanding Still Leaves You Standing. -Jaden Smith']


function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}