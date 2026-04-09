// Functions in JavaScript

function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("M");
  console.log("I");
  console.log("T");
}

// sayMyName;  --> this is the reference of function
// sayMyName();  --> this is where the function gets executed

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(); // output --> NaN

// addTwoNumbers("3", 4); //output --> 34

// addTwoNumbers(3, "a"); // ouput --> 3a

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

// console.log(addTwoNumbers(3, 5));

function loginUserMessage(username) {
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sumit"));

// console.log(loginUserMessage()); /// agar aapne valur hi pass nahi ki toh vaha undefined aayega

function loginUserMessage2(username = "sumit") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage2());

//console.log(loginUserMessage2("Shashank")); // yahape shashank over-write ho raha hain

// FUNCTIONS AND OBJECTS

function calculateCarPrice(...num1) {
  // spread operator use kelyamule multiple parameters pass karta yeil
  return num1;
}

// console.log(calculateCarPrice(200, 400, 500, 2000, 5000));

const user = {
  username: "Sumit",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and Price is ${anyobject.price}`,
  );
}

//  This is how we passs object as parameter in functions in JS
// 1.  handleObject(user);

// 2.  handleObject({
//     username: "Ashok",
//     price: 299,
//    });

// FUNCTION WITH ARRAYS

const myNewArray = [200, 400, 600, 800, 1000, 1200];

function returnSecondValue(getArray) {
  return getArray[1];
}


// This is how we pass array as parameter in functions
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([2, 4, 6, 8, 10, 12]));
