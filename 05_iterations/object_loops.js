const myObj = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    cpp: 'C++'
}
for (const key in myObj) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// *************************************************************************************************************

const programming = ['js', 'py', 'rb', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}


const coding = ["js", "python", "ruby", "C++", "java"];

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (num) => {
    // console.log(num);
} )

// function printMe (item) {
//     console.log(item);
// }

// coding.forEach( printMe)

// *************************************************************************************************************

coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
    languageName: 'javascript',
    languagefileName: 'js'
},
    {
    languageName: 'java',
    languagefileName: 'java'
},
    {
    languageName: 'python',
    languagefileName: 'py'
}
]

myCoding.forEach((item) => {
    console.log( item.languageName);
})