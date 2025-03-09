const name = "Ishita";
const repoCount = 15;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//string interpolation

const gameName = new String ("Amishi")
// console.log(gameName); //String {"Amishi"}

// console.log(gameName.__proto__); //{}
// console.log(gameName.toUpperCase()); //AMISHI
// console.log(gameName.length); //6

// console.log(gameName.charAt(2)); //m
// console.log(gameName.indexOf('m')); //2

const newString = gameName.substring(1, 3); //mi
// console.log(newString);

const anotherString = gameName.slice(0, 4); //Ami
// console.log(anotherString);

/* slice(start, end):
Extracts a section of a string and returns it as a new string, without modifying the original string.
If start is greater than end, it returns an empty string.
Negative start or end values are calculated as offsets from the end of the string.
substring(start, end):
Similar to slice(), it extracts a part of a string.
If start is greater than end, it swaps the values of start and end before extracting the substring.
Negative start or end values are treated as 0.*/

const yetAnotherString = gameName.replace('Ami', 'Ish'); //Ishshi
// console.log(yetAnotherString);

const url = "https://thenet%20ninja.co.uk";
// console.log(url.replace('%20', '-')); //https://thenet-ninja.co.uk

const anotherNewString = "    Ishita    ";
// console.log(anotherNewString); //    Ishita
// console.log(anotherNewString.trim()); //Ishita
//trim has start and end functionalities as well as trimStart() and trimEnd()

// console.log(gameName.split(''));


const myString = "Ishita";
const splitString = [...myString];
const joined_string = splitString.join('-');
console.log(joined_string); //I-s-h-i-t-a


let string1 = "Hi my name is Ishita";
let splitString1 = string1.split(' ');

console.log(string1.split('-')); //['Hi', 'my', 'name', 'is', 'Ishita
console.log(splitString1.join('-')); //Hi-my-name-is-Ishita
 
