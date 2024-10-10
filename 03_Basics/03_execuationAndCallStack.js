// +++++++++++++++++++++ Execuation and Call Stack in Javascript ++++++++++++++++++++++++++

//There are Two Phases Code Execution and Call Stack in JS

// 1st => Execution Context
// 2nd => Calls (Call Stack) => How functions will go into memory how they will perform and come out of memory



//++++++++++++++++++++++++++++++++ 1st => Execution Context +++++++++++++++++++++++++++++++++++++
/* 
Javascript code always have a Global EC and is referred to variable "this"

Browser's Global EC is different to Node and other engines (Burn, Deno etc)

In Browser We get this value as Window Object  


There are three types of Execuation Contexts
 
Global Execuation Context
Functional or Function Execuation Context
Eval Execuation Context

*/


/*
{} => for example this is a Js Code
JS code runs in Two Phases 
(1st => Memory Creation Phase (Memory Creation Phase allocates space for variables and other declarations) )   
(2nd => Execuation Phase (Execuation Phase execuates these variables and arithmetic operations etc ) )
*/ 

let value1 = 10;
let value2 = 20;

function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNumbers(value1 + value2);
let result2 = addNumbers(10, 20);

// Steps in which this code will execuate
/*
1- Global Execuation => It will be allocated in "this" variable

2- Memory Creation Phase => At First all variables defined as "Undefined"  like 
Value1 -> undefined
Value2 -> undefined
addNumber -> function definition this part ((num1, num2) 
{
    let total = num1 + num2;
    return total;)
}
result1 -> undefined
result2 -> undefined

3- Execuation Phase
Value1 -> 10
Value2 -> 20
addNumber -> whenever functions will be called a "New SandBox will create" containing the [new Variable + Execuation Thread]

Now this New Sandbox will divided into 2 phases
1-Memory Creation Phase
value1 -> undefined
value2 -> undefined
total -> undefined

2- Execution Context Phase
num1 -> 10;
num2 -> 20;
total -> 30

total -> 30 => this total returns into code global execuation context

NOTE => When the New Sandbox both phases will execuate then this Sanbox will be deleted 

After sandbox completion execuation after total
now would be turn of "result1" , so this result 1 will then accessed into Process No 3- execuation Phase 



3- Execuation Phase
Value1 -> 10
Value2 -> 20
result1 = 10;

after result1 now it be the turn for result2 ,,, so result2 will again go into cycle of new sandbox creation and the sandbox creation box will perform its two phases like one done for result1.

so after execuation result2 will print out or accessed in No 3- Execuation Phase and sandbox will be deleted after execuation...


3- Execuation Phase
Value1 -> 10
Value2 -> 20
result1 = 10;
result2 = 20;

*/










//+++++++++++++++++++++++++++++++ 2nd => Calls (Call Stack) +++++++++++++++++++++++++++++++++++++++++++++


// When a function is invoked, a new execution context is created
// and pushed onto the call stack. When it completes, it is popped off.

// Understanding through this below code example
let value3 = 10;
let value4 = 20;

function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result3 = addNumbers(value1 + value2);
let result4 = addNumbers(10, 20);



/*

+----------------+
|    Global EC   |   // Initial context (Global Execution Context) 
+----------------+
          |
          v
+----------------+
| addNumbers EC  |   // addNumbers function context
+----------------+
| num1: 10      |
| num2: 20      |
| total: undefined |
+----------------+
          |
          v
+----------------+
|    result3 EC  |   // result3 assignment context
+----------------+
| value1: 10    |
| value2: 20    |
| result1: 30   |
+----------------+
          |
          v
+----------------+
|    result4 EC  |   // result4 assignment context
+----------------+
| value1: 10    |
| value2: 20    |
| result2: 30   |
+----------------+

*/

// +++++ NOTE ++++
//The call stack manages the execution contexts in a last-in-first-out (LIFO) manner


/*

Explanation of the Call Stack:

Global Execution Context (Global EC):
This is the starting point where your JavaScript code runs.
It holds global variables and functions.


Function Call (addNumbers):
When you call the addNumbers function, a new execution context for that function is created and pushed onto the stack.
This context holds its own variables (num1, num2, and total).


Execution Phase:
The addNumbers function executes, calculates total, and eventually returns a value.
After execution, this function's context is popped off the stack.


Result Assignment:
The value returned is assigned to result3, which is then stored in the global execution context.
The process repeats for result4, creating another execution context for addNumbers.


Completion:
After both function calls are completed, their contexts are removed from the stack.

*/