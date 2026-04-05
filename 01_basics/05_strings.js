// Strings

const name = "sumit";
const repoCount = 50;

//console.log(name + repoCount + " khalla shen"); // concatination Bad Practices

//console.log(`Hello my name is ${name} and repocount is ${repoCount}`); // Concationation Good Practices

const gameName = new String("sumit-nb");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length); // .length --> string ka length milega

console.log(gameName.toUpperCase()); // toUpperCase() --> String Uppercase madhe bhetel "SUMITNB"

console.log(gameName.charAt(4)); // charAt() --> konse index pe konsa character hain wo specify karta hain

console.log(gameName.indexOf("n")); // indexOf() --> particular character konse index pe hain wo batata hain

const newString = gameName.substring(0, 5); // substring () --> naya substring create hoga

console.log(newString);

const anotherString = gameName.slice(-8, 2); // slice() --> yaha pe bhi naya current string ka sliced portion milega
// yaha pe -ve values bhi accept hote hain

console.log(anotherString);

const newStringOne = "   Sumit   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() --> Sagle starting che anhi ending ch extra spaces remove krun taktay

const url = "https://sumit.com/sumit%20bhasagi";

console.log(url.replace("%20", "nilkanth")); // replace() --> particular portion change krta yetay

console.log(url.includes("sumit"));

console.log(url.includes("amit")); // includes() --> particular string or substring present aahe ka nahi te check krtay


