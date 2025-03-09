let score = "33abc";

console.log(typeof score);

let value = Number(score);
console.log(typeof value);
console.log(value); //it will be NaN not a number

let val = null;
console.log(typeof val);

let val1 = Number(val);
console.log(val1); //it will be 0

let val2 = String(val);
console.log(typeof val2); //it will be string
let val3 = undefined;
console.log(typeof val3); //it will be undefined

let isLoggedIn = 1
console.log(typeof isLoggedIn); //it will be number
let isLoggedIn1 = Boolean(isLoggedIn);
console.log(isLoggedIn1); //it will be true

let isLoggedIn2 = "";
console.log(isLoggedIn2); //it will be false

let isLoggedIn3 = "Ishita";
console.log(isLoggedIn3); //it will be true


let someNumber = 33;
let stringNumber = String(someNumber); //it will be "33"
console.log(typeof stringNumber); //it will be string
