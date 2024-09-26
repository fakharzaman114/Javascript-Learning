// ++++++++++++++++++ Arrays ++++++++++++++++++++++++++++

const myArr = ["Ahmad", "Fahad", "Majid", "Adnan"]
// another way of writing array
const myArray = new Array(1, 2, 3, 4)

//console.log(myArr[2]); // 2nd index of Array

// Array Methods
//myArr.push("Mehmood"); // Add "Mehmood" to the array
//myArray.pop(); // by default remove the last value from the array
//myArr.unshift(10); // add an element to the start of array  
//myArr.shift(); // remove first element from the array
//console.log(myArr.includes(9)); // checks whether that element is present in array or not returning true or false....
//console.log(myArr.indexOf(3)); // 3rd index is not existing in array so it will print out -1 ,,, any value thats not in there will show -1 result


// console.log(myArr);
// console.log(myArray);

//join binds and converts array into string
const newArr = [1, 2, 3, 4, 5]
const itsArr = newArr.join();

//console.log(newArr);
//console.log(itsArr);
//console.log(typeof itsArr);


// ++++++++++++++++++ JavaScript Array Methods: slice() and splice() ++++++++++++++++++++++++++++

// 1. **slice()**:
//    - **Purpose**: Extract a part of an array without changing the original array.
//    - **How it works**: It takes two parameters: the starting index and the ending index (not included).
//    - **Returns**: A new array with the extracted elements.

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Using slice() to get a part of the array
const slicedFruits = fruits.slice(1, 3); // Gets elements from index 1 to 2 (3 is not included)

//console.log("Sliced Fruits:", slicedFruits); // Output: ["Banana", "Cherry"]
//console.log("Original Fruits:", fruits); // Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
// Note: The original array is unchanged


// 2. **splice()**:
//    - **Purpose**: Modify an array by removing, replacing, or adding elements.
//    - **How it works**: It takes three parameters: the starting index, the number of elements to remove, and any elements to add.
//    - **Returns**: An array of removed elements.

const vegetables = ["Carrot", "Potato", "Tomato", "Cucumber"];

// Using splice() to remove and add elements
const removedVeggies = vegetables.splice(1, 1, "Lettuce"); // Removes 1 element at index 1 and adds "Lettuce"

//console.log("Removed Vegetables:", removedVeggies); // Output: ["Potato"] (the removed element)
//console.log("Updated Vegetables:", vegetables); // Output: ["Carrot", "Lettuce", "Tomato", "Cucumber"]
// Note: The original array is changed


// +++++++++++++ push don't merge the two Arrays into one ... It returns the existing Array +++++++++

const marvel_heroes = ["Spider-Man", "Iron Man", "Captain America"];
const dc_heroes = ["Superman", "Batman", "Wonder Woman"];

// marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes);
//console.log(marvel_heroes[3]); // 3rd element in Array which is itself an array
//console.log(marvel_heroes[3][1]); // 1st index of 3rd element in Array

// ++++++++++++ Concat merge the two arrays together into one ... It returns the new Array +++++++++

//const all_heroes = marvel_heroes.concat(dc_heroes);
//console.log(all_heroes);

// +++++++++++++ Another Wy to combine Arrays together +++++++++++++++ 
// Spread operator (...) denoted by three dots.

//const allTheHeroes = [...marvel_heroes, ...dc_heroes];
//console.log(allTheHeroes);


// Usage of "Flat method" to arrange a complex array into simple and easily readable array
const complexArray = [1, 2, 3, [4,5], 6, 7, [8, 9, [10, 11]]]

const resultantArray = complexArray.flat(4);
console.log(resultantArray);
