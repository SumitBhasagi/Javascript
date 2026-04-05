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

// myFunction(); // calling the function

// console.log(typeof heros);

// ************ Memory in JS *********** //

// Stack (Primitive), Heap (Non-Primitive)
//
// primitive datatypes humesha stack memory mein store hote hain
// Non primitive datatypes humesha heap memory mein store hote hain

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubeName = "ZerosandOnes";

let anotherName = myYoutubeName;
anotherName = "KuchBhi";

console.log(myYoutubeName);
console.log(anotherName);

// stack memory mein agar aap kuch access krne ke liye jaatein hain toh wo original value ka copy deta hain
//
// similarly yahape upar anotherName ko pehle ek copy mili thi
// jab usne wo change kiya toh uss copy ki jagah uski value aagayi

let userOne = {
  email: "user@google.com",
  upiId: "user@axl",
};

let userTwo = userOne;

userTwo.email = "newUser@google.com";

console.log(userOne.email); //output --> newUser@google.com
console.log(userTwo.email); //output --> newUser@google.com

// since we are using non-primitive datatypes we are storing these arrays and objects in heap
// and here in heap if we access something then wo apne ko uss particular chhez ka reference deta hain

// usiliye yahape userOne.email and userTwo.email ka output same aaraha hain, bcoz wo ek hi object ke do alag naam hai
