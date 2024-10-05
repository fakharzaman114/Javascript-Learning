
// +++++++++++++ Nested Scope +++++++++++++++++++++

/*
In JavaScript, a "closure" is a feature where an inner function has access to variables from its outer function, even after the outer function has returned. The "closure" gives the inner function the ability to "remember" the scope in which it was created.
*/

//function one() => Outer function
//function two() => Inner function

function one() {
    const userName = "Fakhar";
    
    function two() {
        const website = "www.youtube.com";
        console.log(userName);  // Inner function accessing outer function's variable
    }
    
    //console.log(website);  // Error: website is not accessible here
    two();
}
one();

/*
In essence, closures allow inner functions to access variables from outer functions but not the other way around.
*/


/*
"ReferenceError: website is not defined" we'll get this error because the inner function two() is acting as block-scope and constant website is assigned in it ...... but we are trying to print website in function one() which is acting as outer function scope..... block-scope elemets can't be accessed or print results outside of the block scope
*/ 


if(true){
    const userName = "Fakhar"
    if(userName === "Fakhar") {
        const wesbite = " www.google.com"
       // console.log(userName + wesbite);
    }
    //console.log(website);
    // website is defined in inner function scope and it can be accessible only in the inner scope but we are trying to access it in outer scope thats why we will get the error 
}
// console.log(userName);



// +++++++++ Interesting Concept of Functions Making+++++++++++++

/*
function addOne(num) {
    return num + 1;
}
addOne(5);

const addTwo = function(num){
    return num + 2;
}
addTwo(7);
*/

// when we hold functions in a variable then if we write addTwo() before the function declaration then we will not get the output results...
//Like this

addTwo(7);
const addTwo = function(num){
    return num + 2;
}
