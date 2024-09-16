"use strict"; // Treat all the JS code as a newer version of JavaScript.

// Data type conversion examples
let score = "fakhar";

// Convert string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN (since "fakhar" cannot be converted to a number)

// Conversion notes:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// Convert string to boolean
let isLoggedIn = "fakhar";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true (non-empty string is true)

// Boolean conversion notes:
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// Convert number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// *********************** Operations ***********************

// Unary negation
let value = 3;
let negValue = -value;
console.log(negValue); // -3

// Arithmetic operations
console.log(2 + 2);  // 4
console.log(2 - 2);  // 0
console.log(2 * 2);  // 4
console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(2 / 3);  // 0.666...
console.log(2 % 3);  // 2 (remainder of 2/3)

// String concatenation
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); // "hello hitesh"

// Mixing strings and numbers
console.log("1" + 2);    // "12"
console.log(1 + "2");    // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Order of operations and modulus
console.log((3 + 4) * 5 % 3); // 2

// Type coercion using unary +
console.log(+true);  // 1
console.log(+"");    // 0

// Multiple assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4, 4, 4

// Increment operation
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

// Link to study more on type conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
