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
    name: Amira,
    age: 24
}

const myFunc = function () {
    console.log('Hello');   
}

console.log(typeof myArr);  //object
console.log(typeof myObj);  //object
console.log(typeof myFunc);  //function

