//singleton object
//Object.create method ---> constructor method

//object literals
const mySym = Symbol("key1"); 
const JsUser = {
    name: 'Ishita',
    "full name": 'Ishita Ami', //we can use quotes to name the key
    [mySym]: "myKey1", 
    age: 24,
    location: 'India',
    email: 'ishita@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday']
}

//how to access object properties
// console.log(JsUser.name); //Ishita
// console.log(JsUser['name']); //Ishita
// console.log(JsUser['full name']); //Ishita Ami
// console.log(JsUser[mySym]); 

//we can also use symbols as keys
// so we can use symbols as keys to make sure that the key is unique and not overwritten by any other key 
// in the object or by any other object in the application.

//how to update object properties
JsUser.name = 'Amira';
// console.log(JsUser.name); //Amira
// console.log(JsUser);

// Object.freeze(JsUser); //this will make the object immutable
JsUser.name = 'Ishita'; //this will not work
// console.log(JsUser);


JsUser.greeting = function() {
    console.log('Hello');
}
console.log(JsUser.greeting); //undefined
//we cannot add functions to an object using dot notation. 
// We can only add functions to an object using object literal notation.
console.log(JsUser.greeting()); //Hello
JsUser.greeting2 = function() {
    console.log(`Hello, my name is ${this.name}`); //this refers to the object itself
}
console.log(JsUser.greeting2()); //Hello, my name is Ishita
