/*
    JavaScript is a dynamic language and not static, 
    which means that variables can hold values of 
    different types during runtime
*/

//Primitive 

// 7 types 
/*
    String
    Number
    Boolearn
    Null
    Undefined
    Symbol
    BigInt
*/



const score = 100
const scoreValue = 100.3
const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34324344325435565464767n

console.log(typeof (bigNumber));


// console.log(userEmail);



// Reference (Non Primitive)
/*
    Array
    Objects
    Functions
    
*/

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harsh",
    age: 21,
    
}

const myFunction = function(){
    console.log("Harsh");
}


console.log(typeof heros);


//https://262.ecma-international.org/5.1/#sec-11.4.3
