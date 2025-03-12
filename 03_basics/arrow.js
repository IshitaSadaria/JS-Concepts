// const user = {
//     username: 'Ishita',
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`Welcome ${this.username}!`);
//     }
// }

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();  //Welcome Sam!  //this is the reference to the function welcomeMessage

// ***************************************************************************************************** */

// function chai () {
//     // console.log(this);   //this will print the global object

//     let username = "Ishita";
//     console.log(this.username);  // undefined because 'this' will work in object context
// }

// chai();

// ***************************************************************************************************** */

// const chai = function () {
//     let username = "Ishita";
//     console.log(this.username);  // undefined because 'this' will work in object context
// }
// chai();

// ***************************************************************************************************** */

// const chai = () => {
//   let username = "Ishita";
//   console.log(this.username); // undefined because 'this' will work in object context
//   console.log(this); // {}
// };
// chai();

// ***************************************************************************************************** */

// what is the difference between function and arrow function?
// arrow function is a function expression and it does not have its own 'this' keyword. 
// it inherits 'this' from its parent scope and not from the global object 'window' or 'global'. 

// ***************************************************************************************************** */

//normal function
// const addTwo = (num1, num2) => {
//   return num1 + num2;    // explicit return statement
// }
// console.log(addTwo(1, 2));  //3  


// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(1, 2));  //3

// const addTwo = (num1, num2) => (num1 + num2);  // implicit return statement
// console.log(addTwo(1, 2));  //3

// so single statement arrow function can be written in a single line with () parenthesis and no return keyword,
// but if there are multiple statements then we need to use {} braces and return keyword. so {} brackets will require return keyword.


// ***************************************************************************************************** */

const addTwo = (num1, num2) => ({username: 'Ishita'})

console.log(addTwo(1, 2));  // {username: 'Ishita'}  //why it is returning an object? because we are returning an object from the arrow function.
