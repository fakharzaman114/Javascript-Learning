// A function in JavaScript is a reusable block of code that performs a specific task when called.

// console.log("F");
// console.log("A");
// console.log("K");
// console.log("H");
// console.log("A");
// console.log("R");

// function myFunc() {
//     console.log("F");
//     console.log("A");
//     console.log("K");
//     console.log("H");
//     console.log("A");
//     console.log("R");
// }

// myFunc => reference of Function
// myFunc() => execuation of function

// myFunc();


// function addTwoNumbers (number1, number2) => here  (number1, number2) called parameters
// addTwoNumbers(2, 4); => here (2, 4) called arguments

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers() // will get NaN output 
// addTwoNumbers(2, 4); // we have to give arguments

// const result = addTwoNumbers(3, 6);
// console.log("Result: ", result);


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result;
    console.log("FAKHAR"); // this code will not execuate because in functions when we use return then after return no execuation works. 
}
const result = addTwoNumbers(3, 6);
// console.log("Result: ", result);


/*
function loginUser(userName) {
    return `${userName} just logged in`
}

console.log(loginUser("Fakhar"));
*/


// Example to check if a user don't defines a value in function() in console.log

function loginUser(userName) {
    if(userName === undefined){
        console.log("Please Enter UserName");
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUser()); // if no value is added in function's value.


// Spread Operator => ...num1..., num2
// Rest Operator => ...num1

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 500, 700, 1400));


// How to Pass Objects in functions
const user = {
    userName: "fakhar",
    price: 340
}

function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and Price is ${anyObject.price}`);
}

// handleObject(user);


// How to Pass Arrays in functions
const myArray = [200, 300, 400, 700]

function returnThirdValue(getArray) {
    return getArray[2]
}
console.log(returnThirdValue(myArray));
