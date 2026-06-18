// const user={
//     name:"phugga",
//     price :1000,
//     welcomeMsg:function(){
//         console.log(`${this.name}, welcome to website`);
//         // console.log(this); //blah blah
//     }   
// }

// user.welcomeMsg()
// user.name ="meeshi"
// user.welcomeMsg()
// console.log(this); //{} 

/* browser ke ander jo global obj:window
node ke ander : empty obj {}
*/

// function one(){
//     let username ="phugga"
//     console.log(this); //blah blah
//     console.log(this.username); //undefined
// }
// one()

// const one =function(){
//     let username ="phugga" 
//     console.log(this); //blah blah
//     console.log(this.username); //undefined
// }
// one()

// const one =() => {
//     let username ="phugga" 
//     console.log(this); //{}
//     console.log(this.username); //undefined
// }
// one()

// const addTwo =(n1,n2) => {
//     return n1+n2
// }
// console.log(addTwo(3,4));

// const addTwo =(n1,n2) => n1+n2
// console.log(addTwo(3,4));

// const addTwo =(n1,n2) => (n1+n2)
// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({username: "phugga"})
console.log(3,4)

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(()=>{})