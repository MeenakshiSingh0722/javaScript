function myName(){
    console.log("phugga");
}
// myName()

function addTwoNumbers(n1,n2){ //parameters
    console.log(n1+n2);
}
// addTwoNumbers(3,4) //arguments
// addTwoNumbers(3,"a")

function addNums(n1,n2){
    let result = n1+n2
    return result
}
const result=addNums(5,4)
// console.log("REsult: ", result);

function userMsg(name){
     if(!name){
        console.log("PLease enter a username");
        return
    }
    return `hello ${name}, have a nice day `
}
// console.log(userMsg('phugga')); //if value not passed then show undefined
// console.log(userMsg());

function calculatePrice(...num1){ //...rest operator
    return num1
}
// console.log(calculatePrice(200,300,400)); //return array

const user ={
    name: "phugga",
    price :199
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
}
// handleObject(user)
handleObject({
    name:"meeshi",
    price :299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));