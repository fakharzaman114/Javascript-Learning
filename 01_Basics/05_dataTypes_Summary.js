// Primitive

// There are 7 primitive types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100;                    // Number
const socreValue = 100.5;             // Number
const name = "Ahmad";                 // String
let isLoggedIn = false;               // Boolean
const roomTemperature = null;         // Null
let userName;                         // Undefined

const id = Symbol('123');             // Symbol
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 236278726498289292n  // BigInt


// Is Javascript dynamially types or static typed language ????

/*JavaScript is a dynamically typed language. This means that variables do not have a fixed type; their type can change at runtime. For example, you can assign a number to a variable and later assign a string to the same variable without any errors:

let value = 42;        // value is a number
value = "Hello";      // now value is a string
In contrast, statically typed languages require you to define the variable's type at compile time, and the type cannot change*/


// Reference (Non-Primitive dataTypes)
// Arrays , Objects, Functions

const nameList = ["Ahmad","Fakhir","Iman","Naeem"] // Array

const anObj = {              // Object
    name: "Fakhar Zaman",
    age: 27,
    city: "Multan"
}                         

const myFunction = function(){}    // Function