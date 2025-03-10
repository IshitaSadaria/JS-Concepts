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

// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Ishita")); //Ishita just logged in
// if nothing is passed as an argument, it will return undefined just logged in

// ***************************************************************************************************** */

// function loginUserMessage(username) {
//     if (!username) {
//         return "Please provide a username";
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage());

// ***************************************************************************************************** */

// function calculateCartPrice (...num1) {
//     return num1
// }

// console.log(calculateCartPrice(100, 200)); //[100, 200]

// ***************************************************************************************************** */

// const user = {
//     username: 'Ishita',
//     email: 'ishita@gmail.com'
// }

// function handleObject (anyObject) {
//     console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
// }

// handleObject(user); //Username is Ishita and email is ishita@gmail.com

// ***************************************************************************************************** */

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnSecondValue (getArray) {
    return getArray[1];
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 300, 400, 500]));
