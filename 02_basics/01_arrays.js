//arrays

//const arr= [0,1,2,3,4,5,"phugga"]
const arr= [0,1,2,3,4,5]
// console.log(arr[2]);
/* shallow : references 
deep : doesn't share references */

const arr1=new Array(1,2,3,4)
// console.log(arr1[2]);

//Array methods
arr.push(6)
// console.log(arr);

arr.pop()
// console.log(arr);

arr.unshift(9)
// console.log(arr); //first position pr shift ho jayega

arr.shift(8)
// console.log(arr);// remove first element

// console.log(arr.includes(5)); //T
// console.log(arr.indexOf(3)); //if exist then return index otherwise return -1

const newArr = arr.join()
// console.log(typeof arr); //object
// console.log(typeof newArr); //string

//slice , splice

console.log("A",arr);

const n1=arr.slice(1,3) //doesn't manipulate original array
console.log(n1);
console.log("B", arr);

const n2=arr.splice(1,3) //manipulate in original array
console.log(n2);
console.log("c", arr);