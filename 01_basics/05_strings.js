const name ="phugga"
const repoCount=50

//console.log(name +repoCount +"value");
//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('phugga singh')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('u'));
console.log(gameName.split('-'));

const newString=gameName.substring(0,4) //if we gave -ve indexes then automatic start with 0
// console.log(newString);

const anotherString=gameName.slice(-2,3) //can handle -ve indexes
// console.log(anotherString)

const newString1 = "   phugga    "
// console.log(newString1);
// console.log(newString1.trim()); //remove extra spaces

const url = "https://meenakshi.com/meenakshi%20singh"

console.log(url.replace('%20', '-'))
console.log(url.includes('meenakshi'))