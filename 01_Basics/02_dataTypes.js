"use strict"; // Treat all the JS code as newer version of JavaScript.

// alert("Hello"); // This won't work in Node.js.
/* The alert() function is part of the browser's JavaScript environment and is used to display pop-up messages in web pages.
However, it does not exist in Node.js because Node.js is a server-side runtime 
and doesn't have access to browser features like alert(). */

// Always aim to write clean and readable code.

// Data types and their usage pattern:

let name = "Ali";
let age = 18;
let isLoggedIn = true;

// number => Numeric values (e.g., 2^53)
// bigint => For very large numbers
// string => Text values, enclosed in quotes ("" or '')
// boolean => Logical true or false
// null => Represents the intentional absence of a value
// undefined => Represents a variable that hasn't been assigned a value
// symbol => Unique, immutable values (often used as object keys)

// Object: A collection of properties

// Example usage of typeof:
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"

/* Explanation:
   In JavaScript, null is considered a special primitive type that represents the intentional absence of any object value.
   However, the typeof null returns "object" due to a historical bug in the implementation of JavaScript. 
   This quirk has been preserved for backward compatibility.
*/
