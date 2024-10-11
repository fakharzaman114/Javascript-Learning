// if

if (true) {
    // if the condition is true only then loop will work otherwise won't
}

if (false) {
    // will not work
}

// TO check true conditions we make and judge comparisons like below

// comparisons operators ( <, >, <=, >=, ==, ===, != )

if (2 == 2) {
    // condition istrue then loop works will follow on
}

const isLoogedIn = true
if (isLoogedIn) {
    // if true code loop will execuate further...
}



/*
NOTE => == and === (If we want to check simple comparison in values, we can use ==. But if we want to  compare both the values and their data types, we need to use === for strict equality.)

e.g 2 == 2      // Here we are using == simple comparison just the values
e.g 2 == "2"    //Here we can see that one value is number and other one is a string value so Here we'll have to use === strict equality  
*/

// Another Example for understanding of Loop Workflow and conditional checking

const temperature = 42
if (temperature === 42) {
    //console.log(`Result: Temperature is equal to 42 `);
}
else {
    //console.log("Temparature is greater than 50");
}


let score = 2000;
if (score < 400) {
    //console.log("Less Than 500");
} else if (score < 800) {
    //console.log("Less Than 900");
} else if (score < 1100) {
    //console.log("Less Than 1200");
}
else {
    //console.log("Less Than 2000");
}



// +++++++++++++++++ Operators +++++++++++++++++++++++++

// +++++++++++++ Nullish Coalesing Opeartor (??): null undefined ++++++++++++++++++++
// To treat values according to value or null or undefined

let value1;
//value1 = 5 ??  10
//console.log(value1); // output 5

//value1 = null ?? 10
//console.log(value1); // output 10
  
//value1 = undefined ?? 20
//console.log(value1); // output 20

value1 = null ?? 30 ?? 40
console.log(value1); // output 30 always we'll get first value after null or undefined if null or undefined exists


// +++++++++++++++++++ Terniary Operator +++++++++++++++++++++++++++++++

//condition ? true: false
const iceTeaPrice = 150;
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");





// +++++++++++++ Logical Operators (And(all conditions should be true)  OR(either of the condition is true) ) +++++++++++++++++++++++

// Multiple conditional checking
const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    //console.log("User allowed to purchase product");
}
if (userLoggedInFromGoogle || loggedInFromEmail) {
    //console.log("User Looged In Successfully");
}






// ++++++++++++++ Switch Case ++++++++++++++++++

/*
const month = "March"
switch (month) {
    case "January":
        console.log("January");
        break;
    case "Febuary":
        console.log("Febuary");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    default:
        break;
}
*/








// +++++++++++++++++ Truthy / Falsy +++++++++++++++++++++++++

// if we assign a value to a variable only then it will display truthy condition other wise it'll be falsy

// const userEmail = ""   // Here we have not defined ant value falsy case
// const userEmail = []
const userEmail = "abc@test.com"  // Truthy Case
if (userEmail) {
    //console.log("User Email Exists");
}
else{
    //console.log("Don't Have User Email");
}


// +++++++++++++++ Falsy Values +++++++++++++++
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// Except all these above Falsy values all other values considered Truthy
// "test"
// "0"
// 'false'
// " "
// []
// {}
// function(){}


// Empty Arrays conditional Checking
if(userEmail.length === 0) {
    //console.log("Array is Empty");
}
// EmptyOnbjects conditional Checking
const emptyObj = {}
if(Object.keys(emptyObj).length ===0) {
    //console.log("Object is empty");
}


// NOTE
// false == 0 => gives output true
// false == '' => gives output true
// 0 == '' => gives output true