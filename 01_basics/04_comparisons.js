// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //T
// console.log("02" > 1); //T  //automatic convert but should be in same kind of datatype

console.log(null > 0); //F
console.log(null == 0); //F
console.log(null >= 0); //T 
/* the reason is that an eaulity check == and comaprison >,<,<=,>= work differently 
 comparisons convert null to an number, treating it as 0
 i.e. why null>=0 is true */

console.log(undefined == 0); //F
console.log(undefined > 0);  //F
console.log(undefined < 0);  //F

// === Strictly check , data type also

console.log("2" === 2);