// Objects

// 1. Singleton --> ek hi object ka sirf ek instance (copy) poori application me use hona

const myarr = ["S", "u", "m", "i", "t"]; // This is the array
myarr[0]; // and this is the only method which is there to access the array element

const mySymbol = Symbol("key1");

//But in Objects we have multiple options
const JsUser = {
  name: "Sumit",
  "full name": "Sumit Nilkanth Bhasagi",
  age: 21,
  [mySymbol]: "myKey1", //symbol ko humesha sq brackets mein likhna hain
  location: "Hyd city",
  email: "sumit@google.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.lastLogginDays); // this is the first way to access the object properties

// console.log(JsUser["full name"]); // this is 2nd way to access the object properties

// "full name": "Sumit Nilkanth Bhasagi", --> this property is only accessible by 2nd way
// console.log(JsUser.mySymbol); // we cant access the Symbol like this, it will throw error

// console.log(JsUser[mySymbol]); // this is the only way to access the Symbol in JS

JsUser.email = "sumit@microsoft.com"; //Object mein property change krna hoga toh vo change aaise krte hain
// console.log(JsUser);

// Object ke values ko lock bhi krr sakte hain so that koi dusra use change na krr sake & to do that we need to do :
// Object.freeze(JsUser);

JsUser.email = "sumit@amazon.com";
// console.log(JsUser); // iske output mein email: sumit@microsoft.com hi aayega NOT sumit@amazon.com

JsUser.greeting = function () {
  console.log("Hello Js User");
};

// console.log(JsUser.greeting); // output --> [Function (anonymous)]

// console.log(JsUser.greeting()); //output --> Hello Js User

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this["full name"]}`);
};

console.log(JsUser.greetingTwo()); 




