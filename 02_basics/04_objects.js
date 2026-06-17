// const tinderUser =new Object() //output is same but it is singleton
const tinderUser = {} //this is not singleton

tinderUser.id ="123abs"
tinderUser.name="phugga"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    email : "phugga@gmail.com",
    fullName :{
        userfullname:{
            firstName: "phugga",
            lastName : "singh",
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1, obj2, obj3)
// console.log(obj4);

// const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4);

const users =[
    {
        id:1,
        email:"phugga@mail.com"
    },
    {
        id:2,
        email:"meeshi@gmail.com"
    }
]
// console.log(users[1].email);

console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser)); //in pair form

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

