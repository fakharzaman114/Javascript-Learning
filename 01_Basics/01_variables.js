const userId = 105214
let userName = "Ahmad"
var userPassword = "21456"
userCity = "Multan"
let userState;

/* if we dont give any value to a variable like this one let userState; then Javascript gives us an undefinded value error, so
if we want to add anything we have to define its value also  */  

// Values that can be changed are called variable var, and let.
// Values that remain constants and don't change are called constants.

/* ways to print out data
we can print data by using
console.log for each item or by using all items in one console.table form */ 
// console.log(userId);
console.table([userId, userName,userPassword, userCity, userState]);

/* According to modern syntax and code writing standers we should use let
instead of var because of the issue in block and functional scope */