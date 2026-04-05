// let score = "33abc";
// let score = null;

let score = undefined;

// console.log(score);

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);

//console.log(valueInNumber); // yaha pe kya ayega output ?? --> NaN(not a number)

//console.log(typeof valueInNumber);

//console.log(typeof score);

// "33" --> 33
//  "33abc" --> Nan (not a number)

let isloggedIn = 1; // (1,2,3,....) --> true  ("") --> false ("anything") --> true (0)--> flase

let booleanIsLoggedIn = Boolean(isloggedIn); //datatype conversion: number to boolean

// console.log(booleanIsLoggedIn);
// console.log(isloggedIn);

let someNumber = 33;

let stringNumber = String(someNumber); // datatype conversion: number to string
// console.log(someNumber);
// console.log(stringNumber);

// console.log(typeof stringNumber);
// console.log(typeof someNumber);

////////////// ******** OPERATIONS ******** ////////////////////////

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ^ 3);  // 2 XOR 3 = 1
// console.log(2 ** 3); // 2 raised to 3 = 8
// console.log(2 % 3);  // remainder

let str1 = "Hello";
let str2 = "Sumit";

let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + 2); //output --> 3
// console.log("1" + 2); // output --> 12
// console.log(1 + "2"); // output --> 12
// console.log("1" + "2"); // output --> 12

// console.log("1" + 2 + 2); //output --> 122
// console.log(2 + 2 + "1"); //output --> 41

// console.log(3 + ((4 * 5) % 3));
// console.log(((3 + 4) * 5) % 3);

// console.log(true); // output --> true
// console.log(+true); // output --> 1
// console.log(+""); // output --> 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; // prefix

console.log(gameCounter);

gameCounter++;  // postfix 

console.log(gameCounter);


