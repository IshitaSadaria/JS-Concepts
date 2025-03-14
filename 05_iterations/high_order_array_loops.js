// for of loop

const myArray = [1,2,3,4,5]

for (const num of myArray) {
    // console.log(num);
}

// *************************************************************************************************************

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// *************************************************************************************************************

// maps
// what is map , map is a collection of key value pairs and it is used to store data 
// map is a collection of objects in key value pairs and it is iterable
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");     // this will not be added in the map because it is already present in the map

// for in loop is not used to iterate over the map because it is not an object

// console.log(map);

for (const key of map) {
    // console.log(key);       // this will print the key value pairs of the map
}

for (const [key, value] of map) {
    // console.log(`Key is ${key} and value is ${value}`);     
}

// *************************************************************************************************************

const myObj = {
    'game1': 'cricket',
     'game2': 'football'
}

for (const [key, value] of myObj) {
    console.log(key, ':' , value);     // this will give the error because myObj is not iterable
}
