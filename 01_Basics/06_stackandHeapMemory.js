/*
In JavaScript, memory is divided into two areas: 
the stack (for simple data) and the heap (for complex data).
*/

/*
Stack Memory (for simple values) => for Primitive dataTypes
Think of the stack like a stack of plates. You can only add or remove from the top. It’s fast, 
but it can only handle small things like numbers or strings.
*/

/*
Heap Memory (for complex values) => for Reference or Non-Primitive dataTypes
The heap is like a big storage room. It’s where larger or more complex things like objects 
or arrays are kept. But, it takes more time to find things in the heap compared to the stack.
*/


// Stack Memory (simple data)
let num = 10;         // number (primitive type)
let text = "Hello";   // string (primitive type)

// Heap Memory (complex data)
let person = {        // object (Non-Primitive type) (stored in the heap)
  name: "Alice",
  age: 25
};

// Reference to Heap (stored in the stack)
let personRef = person;
// console.log(person);



/*
Primitives like number, string, boolean are stored in the stack. 
When you assign a primitive value to a new variable, a copy of the value is made.
*/

// when we take back reference from stack we get the copy and We don't get the original value reference

let userName = "Ahmad";
let anotherName = userName;  // A copy of the value "Ahmad" is made.
anotherName = "Basit";       // Changing 'anotherName' doesn't affect 'userName'

console.log(userName);       // Output: Ahmad
console.log(anotherName);    // Output: Basit


/*
Objects and arrays are stored in the heap. When you assign one object to another variable, 
only the reference (the memory address) is copied, not the actual data. Both variables point to the same object in memory.
*/

// when we take back reference from heap we dont get the copy we get the original value reference

let userOne = { email: "user@gmail.com", age: 20, city: "London" };
let userTwo = userOne;  // Both point to the same object in the heap

userTwo.email = "abc@gmail.com";  // Modifying 'userTwo' affects 'userOne'
console.log(userOne.email);       // Output: abc@gmail.com
console.log(userTwo.email);       // Output: abc@gmail.com

