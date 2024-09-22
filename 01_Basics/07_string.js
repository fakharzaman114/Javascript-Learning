const name = "Fakhar";
const nameCount = 6;
// console.log(name + nameCount);

// string interpolation (the modern way to print out)
console.log(`my name is ${name} and my nameCount is ${nameCount}`);

// Another way to assign strings
const gameCount = new String("fakharzaman");

// prototype properties in this way of string assigning

// key-value pair
console.log(gameCount[0]);
// length
console.log(gameCount.length);
// concat
console.log(gameCount.concat());
// uppercase
console.log(gameCount.toUpperCase());
// char at
console.log(gameCount.charAt(4));
// index of(positioning of string letter)
console.log(gameCount.indexOf('r'));
// sub-string; 
const newString = gameCount.substring(0, 6) // 6 will not be included it will count from 0 to 5 according to js rule
console.log(newString);

// some more string methods

// includes; check if a string contains a specific sequence of characters
console.log(gameCount.includes("zaman")); // true

// endsWith; checks if a string ends with specific characters
console.log(gameCount.endsWith("zaman")); // true

// startsWith; checks if a string starts with specific characters
console.log(gameCount.startsWith("fakhar")); // true

// slice; extracts a part of a string and returns it (like substring but can handle negative index)
console.log(gameCount.slice(0, 6)); // fakhar

// replace; replaces a specified value with another value in a string
console.log(gameCount.replace("zaman", "ali")); // fakharali

// split; splits the string into an array based on a specified delimiter
const splitString = gameCount.split(""); // splits each character into an array
console.log(splitString);

// repeat; repeats the string a specified number of times
console.log(gameCount.repeat(2)); // fakharzamanfakharzaman

// trim; removes whitespace from both ends of a string
const messyString = "   fakharzaman   ";
console.log(messyString.trim()); // fakharzaman

// charCodeAt; returns the Unicode of the character at a specified index
console.log(gameCount.charCodeAt(0)); // Unicode for 'f'

// padStart; pads the string at the start to a certain length
console.log(gameCount.padStart(15, "*")); // ***fakharzaman

// padEnd; pads the string at the end to a certain length
console.log(gameCount.padEnd(15, "*")); // fakharzaman***