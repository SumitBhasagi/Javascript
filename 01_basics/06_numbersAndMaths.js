const score = 400;
// console.log(score);

const balance = new Number(40000.47);
// console.log(balance); /// object ki tarah output show karega

// console.log(balance.toString()); // .toString() --> string main convert karta hain
// console.log(balance.toString().length); // ek bar string mein convert krr liya to fir abb string ke operations use krr sakte
// console.log(balance.toFixed(1)); // .toFixed() --> number to precision ke hisab se set krta hain

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3)); // toPrecision() --> ye bhi number precise krta hain

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ++++++++ MATHS +++++++++ //

// console.log(Math); // Math --> object hain

// console.log(Math.abs(-4)); // .abs() --> absolute value ( negative to positive convert krta hain)
// console.log(Math.abs(-4.25));

// console.log(Math.round(3.46)); // .round() --> rounding number  --> output : 3
// console.log(Math.ceil(3.56)); // .ceil() --> ceiling number  --> output : 4
// console.log(Math.floor(3.56)); // floor() --> floor number  --> output: 3

// console.log(Math.min(4, 5, 6, 7, 2, 1, 11, 24)); // .min(x,y,z,...) --> finding smallest element

// console.log(Math.max((4, 5, 6, 7, 2, 1, 11, 24))); // .max(x,y,z,...) --> finding greatest element

console.log(Math.random()); // .random() -->  0 or 1 ke beech vali konsi bhi random number show karegi
console.log(Math.random() * 10 + 1); // yahape 1 se jyada larger values generate hogi

console.log(Math.floor(Math.random() * 10 + 1)); // yahape single digit values generate hogi

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // yaha pe 10 se jyada larger values generate hogi

