// let a = 10;
// const b = 20;
// var c = 30;

// // {} //block scope

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

// ***************************************************************************************************** */

var c = 300;
let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(a); //10
  
}

// console.log(a);   // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c);  //30   //var is function scoped


// ***************************************************************************************************** */

function one () {
  const username = "Ishita";

  function two (){
    const website = "youtube";
    console.log(username);
  }
  // console.log(wwebsite);  //ReferenceError: website is not defined
  
  two()
}

one();

// ***************************************************************************************************** */

if(true) {
  const username = "Ishita";
  if(username === "Ishita"){
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ***************************************************************************************************** */

function addOne (num) {
  return num + 1;
}

addOne(5);    //6  this function call can be placed anywhere in the code before the function definition it will execute

// this can be also called as a function expression
const addTwo = function (num) {
  return num + 2;
}

addTwo(5); //7  this function call cannot be placed before the function definition it will give an error as it is not defined
//this is also known as hoisting or variable hoisting