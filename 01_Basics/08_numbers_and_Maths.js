
// +++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++

const score = 400;
console.log(score);

const balance = new Number(700);
console.log(balance);
console.log(typeof balance);

// Length
console.log(balance.toString().length);
// To Fix (Adding zeros after decimal)
console.log(balance.toFixed(2));
// To Precision
const otherNumber = 541.25698;
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(4));
// LocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // US Numbers Notation
console.log(hundreds.toLocaleString("en-PK")); // Palkistan Numbers Notation
console.log(hundreds.toLocaleString("en-IN")); // Indian Numbers Notation


// +++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs => absolute converts -ve number into positive numbers (only -ve to +ve works not vice versa)
console.log(Math.round(4.5)); // round of numbers (conversion from decimal to adding extra number in before decimal, only add 1 more if after decimal number is 5 or above)
console.log(Math.ceil(4.32)); // ceil (ceiling) will choose top value if there is any numbers in after decimal e.g 4.32 converts to 5 
console.log(Math.floor(4.99)); // floor will convert number to exact the same number which is before decimal
console.log(Math.min(1, 4, 5, 8)); // Lowest Value in Array
console.log(Math.max(1, 4, 5, 8)); // Highest Value in Array

// Math.random() number will come between 0 to 1 by default
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

 


 