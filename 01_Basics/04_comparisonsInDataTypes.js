// Explanation of Comparisons, Type Coercion, and Strict Equality in JavaScript:
// Basic comparisons:


console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true
// These comparisons behave as expected. JavaScript checks if the numerical value on the left is greater, less than, or equal to the value on the right.

// Comparisons with Type Coercion (==):


console.log("2" > 1);    // true
console.log("02" > 1);   // true
// In both cases, JavaScript converts the string "2" and "02" to numbers before comparing them with 1. This is because JavaScript uses type coercion when comparing values of different types (string and number in this case).

//Strict Equality (===):


console.log(2 === "2");  // false
console.log(null === 0); // false
// The === operator checks both value and type. No type conversion occurs, so:

// 2 === "2" is false because one is a number and the other is a string.
// null === 0 is also false because null is a distinct primitive value, not equal to 0.


// Comparing null to a number:
console.log(null > 0);    // false
console.log(null >= 0);   // true
console.log(null < 0);    // false
console.log(null <= 0);   // true
console.log(null != 0);   // true
// The behavior of null is a bit tricky:

/*null > 0: This returns false because null is treated as 0 in numeric comparisons.
null >= 0: This returns true because null is considered equal to 0.
null < 0: This is false since null is treated as 0 and 0 is not less than itself.
null <= 0: This returns true because null (treated as 0) is equal to 0.
null != 0: This is true because null and 0 are not the same in terms of loose equality.


Comparing undefined to a number: */
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false
console.log(undefined == 0);   // false
console.log(undefined >= 0);   // false
console.log(undefined <= 0);   // false
// undefined > 0: This returns false because undefined cannot be compared to numbers in meaningful ways.
// undefined < 0: This also returns false for the same reason.
// undefined == 0: This is false because undefined is not coerced into 0 (unlike null).
// undefined >= 0 and undefined <= 0: Both are false because comparisons between undefined and numbers return false.

// KEY POINTS:

/*Type Coercion (==): JavaScript will attempt to convert values of different types when using
loose equality (==) or relational comparisons (<, >, <=, >=).*/

/*Strict Equality (===): No type conversion occurs, and the comparison fails if the types differ.*/

/*null: When compared to numbers, null is treated as 0 in relational comparisons but remains distinct in equality comparisons.*/

/*undefined: It is neither equal to nor greater/less than any number. Any comparison with undefined and numbers
results in false, except when using strict equality (===), which evaluates undefined only as itself.*/





