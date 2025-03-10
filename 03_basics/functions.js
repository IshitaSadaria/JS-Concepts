// function sayMyName() {
//   console.log("Ishita");
// }

// sayMyName(); //Ishita      //this is the reference to the function sayMyName

// ***************************************************************************************************** */
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(1, 2); //3
// console.log(result); //undefined  //this is because the function addTwoNumbers does not return anything

// ***************************************************************************************************** */
// function addTwoNumbers(number1, number2) {
//   //    let result = number1 + number2;
//   //    return result;
//   return number1 + number2;
// }

// const result = addTwoNumbers(1, 2); //3
// console.log("Result is: ", result);

// ***************************************************************************************************** */

function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Ishita")); //Ishita just logged in
