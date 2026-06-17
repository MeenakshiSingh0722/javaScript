// singleton : ek hi obj (Object.create : constructor through)

// object literals
const mySym=Symbol("key1")

const JSuser= {
    name : "phugga",
    "full name":"phugga singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "meenakshi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym])

JSuser.email = "phugga@gmail.com"
// Object.freeze(JSuser)
JSuser.email = "phugga@chatgpt.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());