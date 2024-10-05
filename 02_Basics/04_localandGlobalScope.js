// let a = 10
// const b = 20
// var c = 30

//console.log(a);
//console.log(b);
//console.log(c);


/*
{} => curly braces are known as scope in programming languages i.e we can see them in functions and if-else loops 
*/

/* 
curly braces can also been seen in objects in js but there they are not scope ,,, there they are the
syntax declarations of objects 
*/

if(true) {
    let a = 10
    const b = 20
    var c = 30
    d = 40
}

// here in if loop we have declared vaiables and consts but we have not retured the values so console.log should not display any output result.... but var is showing result and thats the main reason why we dont use var very often because it creates conflicts among code.

//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);



// if(true) {
//     let a = 10
//     const b = 20      => This is called block scope
//     var c = 30
//     d = 40
// }


// var c = 30            => This is called global scope 
// d = 40

/*
values written outside of block-scope are called global scope values and are available in block scope but block scope values can not be available in outside of the block scope
*/

let a = 340 

if(true) {
    let a = 30
    const b = 40
}

console.log(a);

/*
this above example clearly showing block-scope elements values are not printing values outside of the block-scope
*/

 