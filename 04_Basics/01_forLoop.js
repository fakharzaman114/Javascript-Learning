// ++++++++++++++++  For Loop +++++++++++++++++++++++
//for

/*
for (initialization; condition; increment/decrement) {
    // code to be executed
}
*/

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/



/*

A for loop in JavaScript is a control flow statement that allows you to run a block of code repeatedly

1- Initialization: This part is executed only once, at the beginning of the loop. You can initialize variables here.

2- Condition: Before each loop iteration, this condition is checked. If it's true, the loop continues; if false, the loop stops.

3- Increment/Decrement: After each iteration, this part is executed to update the loop counter
*/

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// For Loops with Array
// const colors = ["red", "green", "blue", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


//  If else usage inside For Loops
/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // Check if i is divisible by 2 (even number) 
        console.log(i);
    }
}
*/

//  For Loops inside For Loop usage
/*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Row ${i}, Column ${j}`);
    }
}
*/

// Maths Tables till 10th Table with For Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for(let j = 1 ; j <= 10; j++){
        console.log( i + '*' + j + '=' + i*j );
    }
}




