// const month = "march";

// switch (month) {
//   case "jan":
//     console.log("January");
//     break;
//   case "feb":
//     console.log("February");
//     break;
//   case "march":
//     console.log("March");
//     break;
//   case "april":
//     console.log("April");
//     break;
//   default:
//     console.log("default cas month");
//     break;
// }


// **************************************************************************************************************

// const userEmail = "abc@gmail.com"
const userEmail1 = [] 
// if(userEmail1){
//     console.log("Got user email");
// }else{
//     console.log("User email not found");
// }

// this will print Got user email because the value of userEmail is not null or 
// if the userEmail would be "" then else block will be printed

//falsy values
//false, 0, -0, "", null, undefined, NaN, BigInt(0), 

// truthy values
//true,  "0",  'false',  " ",  [], {},  function(){},  Symbol(),  BigInt(1)

// to check array is empty or not

if(userEmail1.length === 0){
    // console.log("Array is empty");
}

//check if the object is empty or not

const user = {}

if(Object.keys(user).length === 0){
    // console.log("Object is empty");
}

// ******************************************************************************************************

// Nullish coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10 // 10
val3 = undefined ?? 10 // 10
val4 = 0 ?? 10 // 0
val5 = "" ?? 10 // ""
val6 = null ?? 10 ?? 20 // 10
val7 = undefined ?? 10 ?? 20 // 10
val8 = 0 ?? 10 ?? 20 // 0
val9 = "abc" ?? 0 

console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);

// ******************************************************************************************************

// ternary operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
