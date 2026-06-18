//var c=300
//let a=300

// if (true){
//     let a=10 //same 
//     const b =20 //not access outside the scope
//     var c=30 //globally access
//     console.log("inner :",a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const user ="phugga"
//     function two(){
//         const website ="YT"
//         console.log(user);
//     }
//     // console.log(website) //error
//     two() 
// }
// one()

// if (true){
//     const user="phugga"
//     if (user === "phugga"){
//         const website=" YT"
//         console.log(user + website);
//     }
    // console.log(website); //error
// }console.log(user); //error


// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5)); //no error

function addone (n){
    return n+1
}

// console.log(addTwo(4)); //error cause before fn declaration cant call when we store function in variable
const addTwo =function(n){
    return n+2
}
console.log(addTwo(6));