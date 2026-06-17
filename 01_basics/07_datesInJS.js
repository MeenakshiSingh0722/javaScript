let date = new Date()
// console.log(date.toString()); //Wed Jun 17 2026 09:04:21 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); //Wed Jun 17 2026
// console.log(date.toISOString()); //2026-06-17T09:04:21.933Z
// console.log(date.toJSON()); //2026-06-17T09:04:21.933Z
// console.log(date.toLocaleString()); //6/17/2026, 9:04:21 AM
// console.log(typeof date); // object

// let createDate = new Date(2026, 0, 23)
// let createDate = new Date(2026, 0, 23, 5,6)
// let createDate = new Date("2023-01-14") //yyyy-mm-dd
let createDate = new Date("01-14-2023") //mm-yyyy-dd
// console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //ms
// console.log(myCreatedDate.getTime()); //ms
// console.log(Math.floor(Date.now()/1000)); //in sec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //cause in js month starts with 0
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `${newDate.getTime()}`

newDate.toLocaleString('default', {
    weekday: "long",
})