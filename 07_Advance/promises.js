// const promiseOne = new Promise ( (resolve, reject) => {
//     // do an async task
//     //DB calls, cryptography, network requests
//     setTimeout(() => {
//         console.log("Async task completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then( () => {
//     console.log("Promise resolved");
// })

// we have to use resolve in the promise function to resolve the promise then only the console
// log in the then function will be executed

// *****************************************************************************************************

// new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         console.log("Async task 2");
//         resolve();
//     }, 1000)
// }).then( () => {
//     console.log("Async 2 resolved");
// })

// *****************************************************************************************************

// const promiseThree = new Promise ((resolve, reject) => {
//     setTimeout ( () => {
//         resolve({username: "Ishita", email: "ishita@gmail.com"})
//     }, 1000)
// })

// promiseThree.then ( (user) => {
//     console.log(user);
//     console.log(user.username);
// })

// *****************************************************************************************************

// const promiseFour = new Promise ((resolve, reject) => {
//     setTimeout( () => {
//         let error = true;
//         if(!error) {
//             resolve({ username: 'Ishi', password: '1234'})
//         }else{
//             reject("Error: Something went wrong");
//         }
//     }, 1000)
// })

// promiseFour.then( (user) => {
//     console.log(user);
//     return user.username;
// }).then( (username) => {
//     console.log(username);
// }).catch( (error) => {
//     console.log(error);
// }).finally( () => {
//     console.log("Finally: This will run irrespective of the promise being resolved or rejected");
// })

// *****************************************************************************************************

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "1234" });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// *****************************************************************************************************

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ", error);
});