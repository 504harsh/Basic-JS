/*
object ko declare krne ke do option hai 
first is litral ki tarah and second is constractor ki tarah

singleton //jo bhi object, constractor ke threw banate hai usko singleton bolte hai 

//Object.create

*/

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Harsh",
    "full Name" : "Harsh Tiwari",
    [mySym] : "mykey1", //is type se ham symbol ko assess krte hai 
    age : 21,
    location: "Jhansi",
    email : "testing@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}


// console.log(JsUser.email); //mostly ham isko use krte hai
// console.log(JsUser["email"]);//mainly ham yahi use krte hai 
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "tiwariharsh504@gmail.com"

// Object.freeze(JsUser)// iska use se value change nahi hoti hai jo pahale se hai bahi rahati hai
JsUser.email = "tiwariharsh5044344@gmail.com"

// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    //iska use automatic value ko lena ke liya kiya jaata hai
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
