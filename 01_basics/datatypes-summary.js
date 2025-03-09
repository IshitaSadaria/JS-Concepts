//Primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const name = 'Ishita';
const outsideTemp = null;
let age;

const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id === anotherId);   //false


//Reference (Non primitive)
// Array, Object, Function

const myArr = ["Ishita", "Ami", "Ishi"]
let myObj = {
    name: 'Amira',
    age: 24
}

const myFunc = function () {
    console.log('Hello');   
}

console.log(typeof myArr);  //object
console.log(typeof myObj);  //object
console.log(typeof myFunc);  //function

//************************************************************************** */

//Stack (Primitive) - Stored in stack memory
//Heap (Non primitive) - Stored in heap memory

let myName = 'Ishita';
let anotherName = myName;

console.log(myName, anotherName); //Ishita Ishita
anotherName = 'Ami';
console.log(myName, anotherName); //Ishita Ami  

// This happens because primitve data types are stored in stack memory and when 
// we assign anotherName to myName, it creates a new copy of myName in stack memory and 
// assigns it to anotherName. So, any changes made to anotherName will not affect myName.

let userOne = {
    email: 'mario@thenetninja.co.uk',
    upvotes: 100
}

let userTwo = userOne; // this is a reference to the object in the heap memory
userTwo.email = "abc@gmail.com0"

console.log(userOne.email); //abc@gmail.com
console.log(userTwo.email); //abc@gmail.com 

// This happens because non-primitive data types are stored in heap memory and when 
// we assign userTwo to userOne, it creates a reference to the object in the heap memory and    
// assigns it to userTwo. So, any changes made to userTwo will affect userOne.


//                  userTwo      ------------>
//                                 reference       {email: 'mario@thenetninja.co.uk', upvotes: 100}
//                  userOne      ------------->  
//                  myName
//                  anotherName
//                  myName

//                  stack memory                         heap memory