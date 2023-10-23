const mySym = Symbol("Key1");

const JsUser = {
  name : "Vijay",
  "Full Name" : "Vijayendra Kumbhar",
  age : 18,
  [mySym] : "Mykey1",
  email : "vijay@gmail.com",
  isLoggedIn : false

}

// console.log(JsUser.email);
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

// Object.freeze(JsUser);
// JsUser.email = "Ajay@gmail.com"
// console.log(JsUser);

JsUser.greeting = function() {
console.log("Hello Javascript");
}

JsUser.greetingTwo = function() {
  console.log(`Hello Javascript, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

