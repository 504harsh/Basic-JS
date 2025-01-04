const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
        
    }
}

// this current context ko refer krta hai

// user.welcomeMessage()
// user.username = "Hello"
// user.welcomeMessage()

// console.log(this);

//browser ke under jo globle oblect hai bo window object

// function chai() {
//     let username = "Harsh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "Harsh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Harsh"
    console.log(this);
}

// chai()

//excipited return
// const addTwo=(num1, num2) => {
//     return num1 + num2
// }

//implicit return

// const addTwo=(num1, num2) =>  (num1 + num2)

const addTwo=(num1, num2) =>  ({username : "Harsh"})
 
console.log(addTwo (3, 4))

// const myArray = [1,4,5,7,9]

// myArray.forEach()