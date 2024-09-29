// singleton
// object.create


// ++++++++++++++++++++++++++++++++++++++++ Object Literals +++++++++++++++++++++++++++++++++++++++++++++++++++
// object literals
// Q1: How to declare symbol ??   Q2:Take a symbol add it in object key and print it ??

const mySymbol = Symbol("key1");


const jsUser = {
    name:"Ali",
    age:19,
    [mySymbol]:"key1",       // Using symbol as key
    "fullName" : "Ali Amjad",
    city:"Lahore",
    email:"ali111@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Tuesday", "Friday"]
}

// How to Access Object Values
// There are two ways to access the values of an object:

//Dot notation (.):

//console.log(jsUser.name);
//console.log(jsUser.age);
//console.log(jsUser.email);
//console.log(jsUser.fullName);

//Bracket notation ([]):
//console.log(jsUser["email"]);

//console.log(typeof jsUser[mySymbol]); // this shows string if we write it as => mySymbol:"key1"
//console.log(typeof mySymbol); // this shows symbol if we write it as => [mySymbol]:"key1"


jsUser.email = "ali111@gmail.com";
//Object.freeze(jsUser);            // prevents any modifications in the object
jsUser.email = "hani121@google.com"  // This won't work because the object is frozen
//console.log(jsUser);


jsUser.greeting = function(){
    //console.log(`Hello JS User, ${this.name}`);
}

//console.log(jsUser.greeting());




// ++++++++++++++++++++++++++++++++++++++++ Object Singleton +++++++++++++++++++++++++++++++++++++++++++++++++++
const tinderUser = new Object()

tinderUser.id = "abs123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Muneeb",
            lastName:"Akhtar"
        }
    }
}

//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullName.firstName);
//onsole.log(regularUser.fullName?.userFullName.Name);   // ? checks response from api whether it exists or not

// How to combine or merge more than one objects...
const obj1 = {1:"a", 2:"b"} 
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

//obj4 = {obj1, obj2}   // Will give error can't merge like this
//console.log(obj3);

// Merge objects using Object.assign

//const obj4 = Object.assign({}, obj1, obj2, obj3);
//console.log(obj4);


// Merge objects using spread operator(...)

//const obj4 = {...obj1, ...obj2, ...obj3};
//console.log(obj4);


// Users and values fetching from the databases

const users = [
    {
        id:1,
        email:"mail1@email.com"
    },
    {
        id:2,
        email:"mail2@email.com"
    },
    {
        id:3,
        email:"mail3@email.com"
    }
]

//console.log(users[1].email);
//users[1].id;


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//console.log(tinderUser.hasOwnProperty('isLogged'));





// ++++++++++++++++++++++++++++++++++++++++ Object de-Structure and JSON API +++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName: "Javascript",
    courseInstructor: "Muneeb",
    price:20000
}

course.courseName
const {courseInstructor} = course;                  // If we think that the variable name is long we can give it an instance
//console.log(courseInstructor);

const {courseInstructor : instructor} = course;     // here instructor is instnce of variable
//console.log(instructor);


//JSON API Structure
// {
//     "courseName": "Javascript",
//     "courseInstructor": "Muneeb",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]


