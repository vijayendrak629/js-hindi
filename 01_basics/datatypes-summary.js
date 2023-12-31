// Primitive data types

// Data types : String, Number, Boolean, null, undefined, symbol, bigint

// const score = "100";
// console.log(typeof score);

// const scoreValue = 100.3;
// console.log(typeof scoreValue);

// const isLoggedIn = false;
// console.log(typeof isLoggedIn);

// const outsideTemp = null;
// console.log(typeof outsideTemp);

// let userEmail;
// console.log(typeof userEmail);

// const id = Symbol("1234");
// const anotherId = Symbol("1234");

// console.log(id === anotherId);
// console.log(typeof id);

// const bigNumber = 212121212n

// console.log(typeof bigNumber);

// Non-primitive data type

// const heroes = ["Shaktiman","Soldier","doga"];

// let myObj = {
//     name: "Vijay",
//     age: 22,
// }

// const myFunction = function(){
// console.log("Hello World");
// }

// console.log(typeof myFunction);
// console.log(typeof heroes);
// console.log(typeof myObj);

//  *****************************************************

// Stack(Primitive), Heap (Non-primitive)

let myYoutubename = "Chai aur code";

let myanothername = "coffe aur code";

myanothername = "only code";
console.log(myYoutubename);
console.log(myanothername);

// Heap

let userOne = {
  name: "Vijay",
  email: "vijay@gmail.com",
};

userTwo = userOne

userTwo.email=  "Vijay321@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);