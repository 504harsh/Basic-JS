const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //is condition mai ye array ke andar array le leta hai 

// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// iska use multiple array yadi ak array mai to unka spread krne ke liya use hota hai ya sabko ak sath rakhane ke liya use hota hai

// console.log(real_another_array);

// console.log(typeof real_another_array);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));//iska use sting ko array banane mai kiya jaata hai
console.log(Array.from({name: "Harsh"})); //is situation mai ye direct access nahi ho paata hai to empty print krta hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

