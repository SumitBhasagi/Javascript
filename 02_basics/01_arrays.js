// aarays

// const myarr = [0, 1, 2, 3, 4, 5, true, sumit];  // he pn valid array aahe

const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[0]);

// shallow copies --> share the same reference points

//deep copies --> do not share the same reference

const myHeros = ["Shaktiman", "doga", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4);

// console.log(myArray2);

myArr.push(25);
myArr.push(250);
myArr.pop();
myArr.unshift(2500); // .unshift(x) -->  it will insert the element 2500 at the first position of your array

myArr.shift(); // .shift() -->  it will remove the element from the first position

console.log(myArr.includes(25)); // .includes(x) --> it will return the boolean answer for an element present in an array or not ?

console.log(myArr.indexOf(25)); // .indexOf(x) --> it will return the index of an element

const newArr = myArr.join(); // .join() --> converts all the elements of the array into string

console.log(newArr);
console.log(typeof newArr);

//slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // .slice(x,y) --> it will print the array from index x to y-1

console.log(myn1); // output --> [ 1, 2 ]

console.log("B", myArr); // ouput --> B [0, 1, 2, 3, 4, 5, 25]

const myn2 = myArr.splice(1, 3); // .splice(x,y) --> it will print and remove the elements from the array from index x to y

console.log(myn2); // output --> myn2 = [1, 2, 3]

console.log("C", myArr); // output --> C [ 0, 4, 5, 25 ]
 