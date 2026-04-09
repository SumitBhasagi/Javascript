// Objects Part II

// Singleton and Constructors with respect to Objects

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = "true";

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Sumit",
      lastName: "Bhasagi",
    },
  },
};

// console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }; // output --> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// this will combine the objects into one object but they will be in nested/sub-objects manner

//////////////////////////////////////////////////
// ++++++ Object.assign() +++++++ //
//const obj3 = Object.assign(obj1, obj2); // output --> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Object.assign() --> combines two or more objects and creates one without sub-objects/nested objects
// const obj3 = Object.assign(obj1, obj2, obj4);

//const obj3 = Object.assign({}, obj1, obj2, obj4); // Good Practice because here in .assign function all the objects are combined in the 1st object inside parameter list
// auur aagar aap 1st object empty dete ho toh fir wo baad mein easily use krne ko aata hain

// iska syntax kuch aaisa hain --> const returnedTarget = Object.assign(target, source);
// console.log(target) = equal to = console.log(returnedTarget) hota hain;
// 1st object as a target object behave krta hain isilye udhar empty object use krneka

// Most general method which we gonna use is spread operator
const obj3 = { ...obj1, ...obj2, ...obj4 }; // output--> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3);

const users = [
  { id: 1, email: "user1@email.com" },
  { id: 2, email: "user2@email.com" },
  { id: 3, email: "user3@email.com" },
  { id: 4, email: "user4@email.com" },
  { id: 5, email: "user5@email.com" },
];

users[1].email;
//console.log(tinderUser);

// ++++ Object.keys(obj_name) +++++

//console.log(Object.keys(tinderUser)); // ye function object ke keys ka array banake return karta hain ,  output --> [ 'id', 'name', 'isLoggedIn' ]

// ++++ Object.values(obj_name) ++++
//console.log(Object.values(tinderUser)); // ye function object ke saare values ka array banake return karta hain , output --> [ '123abc', 'sammy', 'true' ]

// ++++ Object.entries(obj_name) ++++
//console.log(Object.entries(tinderUser)); // ye function object ke sare key-value pair ko single single array mein convert krke saare arrays ko ek aaray mein insert krke return krta hain,       output --> [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', 'true' ] ]
// Yaha pe 1st entry in array "key" rahegi fir 2nd entry uski "value"

// ++++ obj_name.hasOwnProperty("property_name") ++++
//console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Property name mtlb object ka key

// .hasOwnProperty() --> boolean value return karta hain ki particular key uss object me present hain/ uss object se belong krti hain yaa nahi ?

// +++++ Destructuring +++++++ //

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "prakash sakaria",
};

// to take and access the properties of the objects we have 2 general methods which are
// 1. course.courseInstructor
// 2. course[courseInstructor]

// assume there is a situation where we have to access the same property again & again then the code will get enlarge in number of lines and it is not good practices in JS

// So to do such type of repitative access and reduce the redundancy of code
// we use Destructuring*
// this is how we do destructuring, here we can also rename a particular property with shotcuts

const { courseInstructor } = course;
const { courseInstructor: teacher } = course;

console.log(teacher);


// hitesh tried to explain destructuring in react using below array function 
// const nvabar = ({ company }) => {};

// nvabar((company = "hitesh"));


// this is a type of json object 
// {
//   "name": "sumit",
//   "coursename": "JS in Hindi",
//   "price": "free"
// }