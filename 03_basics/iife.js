//Immediately Invoked unction Expression (IIFE)
// (IIFEs) in JavaScript are used primarily to create a new scope. 
// This helps in avoiding variable hoisting and preventing pollution of the global namespace. 
// By encapsulating code within its own scope, an IIFE ensures that any variables declared inside it are not accessible from outside, 
// thus minimizing the risk of naming conflicts and unintended modifications. 
// IIFEs are also useful for creating private variables and executing asynchronous operations.

(function chai () {
    // named IIFE
    console.log('DB connected');
})();

// ()  first paranthersis is used for function definition
// ()  second paranthersis is used for function call/ execution

( () => {
    console.log('DB connected Two');
}) ();

/// we need to add ; at the end of the function expression to make it a function call and not a function definition 

// IIFE is a function expression that is executed immediately after it is defined. 
// It is useful for creating private variables and executing asynchronous operations. 

( (name) => {
    console.log(`DB connected Two ${name}`);
}) ('Ishita')