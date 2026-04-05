// Primitive
// 7 types --> String , Number, Boolean, Null, undefined, symbol, BigInt

const score = 100; // Number Integer
const scoreValue = 100.03; // Number Floating

const isLoggedIn = false; // boolean
const outsideTemp = null; // null

let userEmail; // undefined by default

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 345665458412996345254672n;

// console.log(bigNumber);

// Reference (Non Primituve)
// Arrays, Objects, Functions,

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World!!");
};

myFunction();

console.log(typeof heros);
