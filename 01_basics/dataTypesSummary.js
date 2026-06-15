//primitive:call by value
//7: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue=100.3
const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);

// const bigNumber = 3456543576654356754n

//reference(non primitive):call by reference
//array, objects , functions 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "phugga",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//stack: primitive , var ki copy 
//heap :non primitive , change in original value

let ytChannel='phugga'
let anotherChannel=ytChannel
anotherChannel='meenakshi' //change in copy
console.log(ytChannel); 
console.log(anotherChannel); 

let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let user2=user1
user2.email="meenakshi.com" //original changes

console.log(user1.email);
console.log(user2.email);