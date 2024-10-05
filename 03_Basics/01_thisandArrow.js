
//++++++++++++++++++++++ This ++++++++++++++++++++++++++++++++
const user = {
    userName: "Ahmad",
    price: 1050,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to our Website`);
        //console.log(this);
           
    }
}

// user.welcomeMessage() // this is showing output when we are refering the current context
// user.userName = "Majid"; // here we have change the current context
// user.welcomeMessage();

//console.log(this);


// When we refer (current context => all values inside user object like userName, price etc ) then we use this keyword with values to access it...

/*
when we use node as javascript runtime engine if we print out this in current context of object or changed current context we'll get the result an "empty object {}"

but the same process in browser give the result of this as "Window" the global object in browser is Window 
*/


// +++++++++++++++++++++++++++ Arrow++++++++++++++++++++++++++++++++++++
/*
function mini() {
     console.log(this);
}
mini();
*/

// when we print out "this" inside the function in node enviornment we get too many values and data

/*
function mini() {
    let userName = "Ghani"
    console.log(this.userName);
}
mini();
*/

// Here in this way inside the function we can't access values of variables with "this" keyword.



// How to declare functions through Arrow functions
const learn =  () => {
    let userName = "Hameed"
    console.log(this.userName);
}
learn();



const addTwoNumbers = (num1, num2) => {
    return num1 + num2                       // => Basic Arrow Function Format
}


// const addThreeNumbers = (num1, num2, num3) => num1 + num2 + num3   // => Implicit Return Format

// constFourNumbers = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)

console.log(addTwoNumbers(2,4));
console.log(addThreeNumbers(2, 4, 6));
