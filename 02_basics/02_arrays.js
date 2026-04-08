const marvel_heros = ["iron-man", "thor", "Spiderman", "hawkeye"];

const dc = ["Superman", "batman", "flash"];

// marvel_heros.push(dc); // .push(arr) --> ek array mein dura array dal diya lekin kuch iss tarike se -->
// [
//   'iron-man',
//   'thor',
//   'Spiderman',
//   'hawkeye',
//   [ 'Superman', 'batman', 'flash' ]
// ]

// console.log(marvel_heros[4][1]);

// console.log(marvel_heros);

// .concat() Function
const all_heros = marvel_heros.concat(dc); // 1st_array.concat(2nd_arr) --> it will concatinate the 1st array with the 2nd_array

//console.log(all_heros); //
// console.log(marvel_heros);

//Spread Operator

const all_new_heros = [...marvel_heros, ...dc]; // ...arr --> Spread Operator array ke hrr ek element ko seprate krr deta hain

//console.log("All New Heros: ", all_new_heros);

// .flat() function
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; //nested arrays

const real_another_array = another_array.flat(Infinity); // .flat(x) --> arrays aaur array ke ander wale subarrays ke hrr ek element ko seprate seprate krta hain

//console.log(real_another_array);

// Array.isArray("") function
//console.log(Array.isArray(real_another_array)); // Array.isArray("") --> boolean value return karta hain ki given datatype array hain ya nahi

// Array.from("") function
// console.log(Array.from("SumitNilkanthBhasagi")); // Array.from("") --> ye function kisi bhi normal string ko array mein convert krr deta hain

console.log(Array.from({ name: "Sumit" })); // INTERESTING

/////  Array.of(x,y,z,..)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Array.of(x,y,z,..) --> ye function variables ko array mein convert krta hain
