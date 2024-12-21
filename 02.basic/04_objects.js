// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.namee ="Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "testing@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {7: "a", 6: "b"}

// // const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "testing@gmail.com"
    },
    {
        id: 1,
        email: "testing@gmail.com"
    },
    {
        id: 1,
        email: "testing@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
