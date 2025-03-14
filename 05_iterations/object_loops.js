const myObj = {
  js: "javascript",
  py: "python",
  rb: "ruby",
  cpp: "C++",
};
for (const key in myObj) {
  // console.log(key);
  // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// *************************************************************************************************************

const programming = ["js", "py", "rb", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

const coding = ["js", "python", "ruby", "C++", "java"];

coding.forEach(function (item) {
  // console.log(item);
});

coding.forEach((num) => {
  // console.log(num);
});

// function printMe (item) {
//     console.log(item);
// }

// coding.forEach( printMe)

// *************************************************************************************************************

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languagefileName: "js",
  },
  {
    languageName: "java",
    languagefileName: "java",
  },
  {
    languageName: "python",
    languagefileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log( item.languageName);
});

// const values = myCoding.map((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

//for each will return undefined because it is a void function

// *************************************************************************************************************

// const newNums = [1,2,3,4,5,6,7,8,9,10]
// // const myNums = newNums.filter((num) => num > 4);
// const myNums = newNums.filter((num) => {
//     return num > 4
// })                               // if we are using {} in the callback function then we need to return the value, we need reurn key word
// console.log(myNums);

// *************************************************************************************************************

// const newNums = []
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// mynums.forEach((num) => {
//     if(num > 6) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// *************************************************************************************************************

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNums = myNumbers.map( (num) => { return num + 10})

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => (num >= 40));

console.log(newNums);
