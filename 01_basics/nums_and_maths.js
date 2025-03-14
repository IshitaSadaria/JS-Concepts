const score = 400;
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); //100
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.786789; 
// console.log(otherNumber.toPrecision(5)); //123.79
// console.log(otherNumber.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(1)); //1e+2

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //10,00,000
// console.log(hundreds.toLocaleString('en-US')); //1,000,000

// ******************************************************************************************

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.8)); //4
// console.log(Math.min(1, 5, 3, 2, 8)); //1
// console.log(Math.max(1, 5, 3, 2, 8)); //8

console.log(Math.random()); //random number between 0 and 1
console.log((Math.random()*10) + 1); //random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); //random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random number between 10 and 20

