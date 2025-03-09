const tinderUser = new Object(); //new Object() is equivalent to {}  singleton object
const tinderUser1 = {};    // {} is equivalent to new Object()   nonsingleton object

tinderUser.id = "tinder123";
tinderUser.name = 'Ishita';
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //{id: "tinder123", name: "Ishita", isLoggedIn: false}

const regularUser = {
    email: 'someemail@com',
    fullName: {
        userfullname: {
            firstName: 'Ishita',
            lastName: 'Patel'
        }
    }
};

console.log(regularUser.fullName.userfullname.firstName); //Ishita
console.log(regularUser.fullName.userfullname.lastName); //Patel

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

const obj4 = Object.assign({}, obj1, obj2); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
const obj3 = {...obj1, ...obj2}; // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
console.log(obj3);

const users = [
    {
        id: 1,
        name: 'Ishita'
    },
    {
        id: 2,
        name: 'Ami'
    },
    {
        id: 3,
        name: 'Ishi'
    }
];

users[1].name
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); //['tinder123', 'Ishita', false]    returns an array of values
console.log(Object.entries(tinderUser)); //[['id', 'tinder123'], ['name', 'Ishita'], ['isLoggedIn', false]]

console.log(tinderUser.hasOwnProperty('id')); //true
console.log(tinderUser.hasOwnProperty('email')); //false

//**************************************************************************************************** */

const course = {
    name: 'JavaScript', 
    price: 999, 
    courseInstructor: 'Ishita'
}; //object course

//course.courseInstructor

const {courseInstructor} = course; //destructuring
console.log(courseInstructor); //Ishita
const {courseInstructor: Instructor} = course; //destructuring
console.log(Instructor); //Ishita

