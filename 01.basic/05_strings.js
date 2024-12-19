const name = "Harsh"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harsh-504')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);

// console.log(gameName.trim());

// console.log(gameName.toUpperCase());

console.log(gameName.charAt('2'));

console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, -2);
console.log(anotherString);

const newStringOne = "   harsh   "
console.log(newStringOne);

console.log(newStringOne.trim()); //isse text ke aage or picche ka space hat jaate hai 


const url = "https://harsh.com/harsh%20tiwari"

console.log(url.replace('%20', '-'));//%20 replace kra hai - se


console.log(url.includes('harsh'))//avilable hai ya nahi

console.log(gameName.split('-'));
