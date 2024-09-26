// +++++++++++++++++ Date ++++++++++++++++++++++

let myDate = new Date();
// console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toTimeString());

//let myCreatedDate = new Date(2024, 0, 16)
//let myCreatedDate = new Date(2024, 0, 16, 5, 3)

//console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate = new Date("2024-01-19")
//console.log(myCreatedDate.toLocaleString());

// +++++++++++++++++++ Time +++++++++++++++++++++++++++++

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// conversion from miliseconds to seconds (Interview Question)
//console.log(myCreatedDate.getTime()/1000);


let theDate = new Date()
//console.log(theDate);
//console.log(theDate.getDay()); // output => 4 (Starts from 0 => Monday to onwards so 4 will denote Thursday)
//console.log(theDate.getHours()); // output => 7 (7 hours according to UTC (GMT+0000) Time Zone)
//console.log(theDate.toString());
//console.log(theDate.getTimezoneOffset());

theDate.toLocaleString('default', {
//   dayPeriod:'long',
//   era:'short',
  timeStyle:'medium',
  calendar:'2024'
})






