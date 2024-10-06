// Immediately Invoked Function Expressions (IIFE)

// The Function that immediately execuates
// To Avoid pollution from global scope we use IIFE

// By applying round brackets on whole function we can access the output like the way it is accessed below

(function main() {
    console.log(`DB Connected`);
})();

// IT is necessary to end the first function with ; so the other function could work otherwise we'll get an error

(() => {
    console.log(`DB Connected Again`);
})();

((name) => {
    console.log(`DB Connected to ${name}`);
})('Maheen')

//main()


// Interview Question
// Named IIFE
// Simple or UnNamed IIFE
// Pass Parameters in IIFE
// Write two IIFE in a File


//Named IIFE Example
( function mainOne(){
    console.log(`Data Connected`);
} )()


//Simple or UnNamed IIFE Example
( (userName) => {
    console.log(`Data Connected to ${userName}`);
} )('Usman')


// Pass Parameters in IIFE
//Same Example will work here becuase parameters are passed in this example
( (userName) => {
    console.log(`Data Connected to ${userName}`);
} )('Usman')



// Two IIFE in One File
( function mainOne(){
    console.log(`Data Connected`);
} )();

( (userName) => {
    console.log(`Data Connected to ${userName}`);
} )('Usman')

// Make sure to add semi-colon(;) at the end of first IIFE otherwise the code will not execuate... 