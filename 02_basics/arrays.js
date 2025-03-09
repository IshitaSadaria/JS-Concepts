const myArr = [1, 2, 3, 4, 5];
console.log(myArr[1]); //2

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift(); //removes the first element

// console.log(myArr.indexOf(3)); //2
// console.log(myArr.includes(5)); //true
// console.log(myArr.includes(6)); //false

// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr); //1,2,3,4,5
// console.log(typeof newArr); //string


//slice , splice

// console.log('A', myArr); //A  [1, 2, 3, 4, 5]
const myn1 = myArr.slice(1, 3); //slice(start, end)
// console.log(myn1);  //[2, 3]
// console.log('B', myArr); 

const myn2 = myArr.splice(1, 3); //splice(start, deleteCount)
// console.log('C', myArr); //C [1, 5]
// console.log(myn2); //[2, 3, 4]

// difference between slice and splice is that splice modifies the original array while slice does not. 


//**************************************************************************************************** */

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];

const dcHeroes = ["Superman", "Batman", "Flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); //["Thor", "Ironman", "Spiderman", "Superman", "Batman", "Flash"]

const allHeroes1 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes1); //["Thor", "Ironman", "Spiderman", "Superman", "Batman", "Flash"]

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatArray = another_Array.flat(2); //flat(depth)  we can use infinity as well if depth is not known

console.log(flatArray); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Ishita")); //false
console.log(Array.from("Ishita")); //["I", "s", "h", "i", "t", "a"]
console.log(Array.from({name: "Ishita"})); //[]   interestingly, it returns an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[100, 200, 300]
