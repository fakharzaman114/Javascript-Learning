// ++++++++++++++ While Loop +++++++++++++++++

/*
The while loop in JavaScript allows you to execute a block of code repeatedly as long as a specified condition is true. The key difference between a while loop and a for loop is that the while loop focuses solely on the condition, and it doesn’t have the initialization or increment/decrement built in.
*/

//Syntax
while (condition) {
    // code to be executed 
}
   

/*
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
*/

// With Arrays
const heroArray = ["Flash", "Superman", "Ironman", "Thor"]

let arr = 0
while (arr < heroArray.length) {
    console.log(`The Value is ${heroArray[arr]}`);
    arr = arr +1
}




// +++++++++++++++++++ Do While +++++++++++++++++++++++

let score = 5;
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);