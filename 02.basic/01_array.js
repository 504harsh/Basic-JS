const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Harsh", "Tiwari"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); //zero based indexing
// console.log(myArr2); 

//array mai jab bhi copy karenge to ye shallow copies banata hai 

//Shallow copy means jo bhi ham changes krege bo main array mai bhi change hoga 


//Array Methods

// myArr.push(6)
// myArr.push(7) iska use array mai value add krne mai krte hai

// myArr.pop()  iska use array se value ko delete krne ke liya use krte hai 

// myArr.unshift(9)//ye array ke starting mai add krne ke liya use hota hai
//myArr.shift() //iska use array mai value ko aage se delete krne mai krte hai

// console.log(myArr.includes(9)); //iska use array mai value hai ya nahi bo batata hai true or false mai

// console.log(myArr.indexOf(3));

//const newArr = myArr.join() //join ke threw array ko bo string mai convert kr deta hai and type string mai kr deta hai

// console.log(myArr);
// console.log(newArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


