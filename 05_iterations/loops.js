
const myArray = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`);
for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
}    
}

// *************************************************************************************************************

// while loop

let index = 0
while (index <=10) {
    // console.log(`Value of index is : ${index}`);
    index = index + 2;
}

// *************************************************************************************************************

let myArray1 = ["flash", "batman", "superman"]
let arr = 0;
while (arr < myArray1.length) {
    // console.log(`Value of index is : ${myArray1[arr]}`);
    arr++;
}

// *************************************************************************************************************

let score = 11
do {
    console.log(`Value of score is : ${score}`);
    score++;
}while (score <= 10);