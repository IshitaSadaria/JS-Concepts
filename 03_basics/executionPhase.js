let val1 = 10
let val2 = 5

function addNum (num1, num2) {
    let total = num1 + num2
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(20, 30);


// Global execution is firstly allocated to this.

//2. Memory phase- all vaiables are allocated to memory, val1->undefined(initially), val2->undefined, 
// addNum->function definition, result1->undefined, result2->undefined

//3. Execution Phase - val1->10, val2->5, result1->15, result2->50
// whenever the functions are executed the box will be created which is called "new executional context", which will 
// create environment sandbox and execution thread 


// *************************************************************************************************************

//call stack - stack memory 
// what happens in call stack is that it will create a new executional context and will push it to the stack, and when the function is done

// it will pop it from the stack and return the value to the caller function.

// function one() {
//     console.log("one");
// }

// function two() {
//     console.log("two");
// }

// function three() {
//     console.log("three");
// }


// one();
// two();
// three();

// now first function is one is pushed to stack and then executed and then popped from stack and 
// then two is pushed and executed and then popped from stack and then three is pushed and executed 
// and then popped from stack.

// *************************************************************************************************************

//but if the functions are called inside one another functions 

function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}


one();
two();
three();


// now in this as the functions are called inside other like function two is called in side function one, 
// and function three is called inside function two, so the execution phase will be like this

// in this code, the function one is pushed to the stack first then two is pushed because it is called 
// inside one and then function three is pushed to the stack 

// so when the line 70 executes the stack will be like this one-> two-> three, and when it executes three will be popped out first 
//then two and the one will be popped out from the stack.

// when line 71 is executed the two is pushed then three is pushed then three is popped and then two is popped

//when line 72 is executed the three is pushed then three is popped