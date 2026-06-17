const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.455
// console.log(otherNumber.toPrecision());//take range 1-21, and return string

const hundreds =1000000
// console.log(hundreds.toLocaleString()); //simple representation :default Us standard
// console.log(hundreds.toLocaleString('en-IN'));//indian standard

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //-ve =>=ve
// console.log(Math.round(4.5)); //round off :regular value
// console.log(Math.ceil(4.8)); //top value
// console.log(Math.floor(4.8)); //down value
// console.log(Math.min(2,3,4,6,7));
// console.log(Math.max(4,5,7,8,2));

// console.log(Math.random()); //value 0-1 
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);