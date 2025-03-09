let score = "33abc";

// console.log(typeof score);

let value = Number(score);
// console.log(typeof value);
// console.log(value); //it will be NaN not a number

let val = null;
// console.log(typeof val);

let val1 = Number(val);
// console.log(val1); //it will be 0

let val2 = String(val);
// console.log(typeof val2); //it will be string
let val3 = undefined;
// console.log(typeof val3); //it will be undefined

let isLoggedIn = 1
// console.log(typeof isLoggedIn); //it will be number
let isLoggedIn1 = Boolean(isLoggedIn);
// console.log(isLoggedIn1); //it will be true

let isLoggedIn2 = "";
// console.log(isLoggedIn2); //it will be false

let isLoggedIn3 = "Ishita";
// console.log(isLoggedIn3); //it will be true


let someNumber = 33;
let stringNumber = String(someNumber); //it will be "33"
// console.log(typeof stringNumber); //it will be string



// ***************************** OPERATIONS ***************************** //

let value1 = 3;
let negValue = -value1;
// console.log(negValue); //it will be -3

// console.log(3 + 3); //6
// console.log(3 - 3); //0
// console.log(3 * 3); //9
// console.log(3 / 3); //1
// console.log(3 % 3); //0
// console.log(3 ** 3); //27

// console.log(3 + 3 * 3); //12
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12
// console.log(1 + 2 + "3"); //33
// console.log("1" + 2 + 3); //123
// console.log(1 + "2" + 3); //123
// console.log(1 + 2 + 3); //6 

// console.log(+true); //1
// console.log(+false); //0
// console.log(+null); //0
// console.log(+undefined); //NaN
// console.log(+''); //0
// console.log(+{}); //NaN
// console.log(+[]); //0
// console.log(+[1]); //1
// console.log(+[1, 2]); //NaN


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true   
//the reason is that an equality check == and comparisons > < >= <= work differently.
//comparison convert null to a number, treating it as 0. That's why null>=0 is true and null > 0 is false.

console.log(undefined > 0); //false
console.log(undefined < 0); //false 
console.log(undefined == 0); //false
