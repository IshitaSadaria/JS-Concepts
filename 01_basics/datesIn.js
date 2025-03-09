//dates

let myDate = new Date();
// console.log(myDate);

console.log(myDate.toDateString());  //Sun Mar 09 2025
console.log(myDate.toTimeString());  //19:35:54 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //9/3/2025, 7:35:54 pm

console.log(typeof myDate); //object

let myCreatedDate = new Date(2025, 2, 9);
console.log(myCreatedDate.toDateString()); //Sun Mar 09 2025
let myCreatedDate1 = new Date(2025, 2, 9, 19, 35, 54);  
console.log(myCreatedDate1.toLocaleString()); //9/3/2025, 7:35:54 pm

let myCreatedDate2 = new Date('3/9/2025');
console.log(myCreatedDate2.toLocaleString()); //3/9/2025, 12:00:00 am

let myTiemstamp = Date.now();
console.log(myTiemstamp); //1741530002430
console.log(myCreatedDate2.getTime()); 
console.log(Math.floor(Date.now() / 1000)); // it will give the current timestamp in seconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //3    +1 is done because it starts from 0
console.log(newDate.getDate()); //9
console.log(newDate.getDay() + 1); // 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday


newDate.toLocaleString('default', { weekday: 'long' }); //Sunday
newDate.toLocaleString('default', { weekday: 'short' }); //Sun
newDate.toLocaleString('default', { month: 'long' }); //March
newDate.toLocaleString('default', { month: 'short' }); //Mar
newDate.toLocaleString('default', { year: 'numeric' }); //2025 



