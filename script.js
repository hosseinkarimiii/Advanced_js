"use strict";
//before start reading, i want say Ai give me this codes, and  before i write this codes i study too much.

//part 1: Closures in JavaScript
//What are Closures?
//Closures in JavaScript
//A **closure** is a function that remembers the variables from the place where it was created, even after that place is gone.

// now details about closures:

//Practical Uses of Closures.
//Private Variables: Keep some data private.

//This code is teaching us about closures in JavaScript. Closures let a function remember and access variables from its surrounding environment, even after that function has been called. It means your code can retain certain data and keep it accessible only within specific functions, ensuring privacy and controlled access. It's a nifty feature for managing scope and protecting data!

// function outerFunction() {
//   let outerVariable = "I am from the outer scope!";
//   function innerFunction() {
//     return outerVariable;
//   }
//   return innerFunction;
// }

// const closure = outerFunction();
// console.log(closure()); // "I am from the outer scope!"

//This code is an example of an Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("This runs immediately!");
// })();
//This code is an example of an Immediately Invoked Function Expression (IIFE). Here’s what it does:It defines a function using (function() { ... }).The () at the end means the function is executed right away.
//So when you run this code, the message "This runs immediately!" is printed to the console instantly. It’s a handy way to run a function once without leaving any variables or functions hanging around in the global scope.

//Timing and Callbacks with Closures:
// function showMessage(message) {
//   setTimeout(function () {
//     console.log(message);
//   }, 3000);
// }

// showMessage("Hello after 3 seconds!");
//These examples should help you see how closures can be used in different scenarios
//Arrow Functions
//Arrow functions are a shorter way to write functions in JavaScript. They use the => syntax and are especially handy for simple functions.

// const add = (a, b) => a + b;
//Here, add is a function that takes two parameters a and b, and returns their sum.

//Differences from Regular Functions
//No own this context: Arrow functions don't have their own this context, which means they inherit this from the enclosing lexical context. This is particularly useful in callbacks.

// class Person {
//   constructor() {
//     this.age = 0;
//     setInterval(() => {
//       this.age++; // `this` refers to the instance of `Person`
//     }, 1000);
//   }
// }

// const p = new Person();
// const a = new Person();
// const e = new Person();
// console.log(p, a, e);
//Implicit return: If the function body is a single expression, you can omit the curly braces and the return keyword.

// const square = (x) => x * x;
//Function Parameters ES6 also brought some enhancements for function parameters:

//Default Parameters: You can set default values for parameters directly in the function signature.

// function greet(name = "stranger") {
//   return `Hello, ${name}!`;
// }
//Rest Parameters: This allows you to represent an indefinite number of arguments as an array.

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }
//Spread Operator
//While not exclusive to functions, the spread operator (...) is often used with function calls to spread elements from an array.

// const numbers = [1, 2, 3];
// console.log(Math.max(...numbers)); // 3

//What is a Promise?
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. Imagine you order a book online. You don't sit by the door waiting; you get a promise that it'll arrive. In JavaScript, Promises work similarly, allowing your code to keep running while it waits for the asynchronous operation to complete.
//Basic Structure:
//Pending: The initial state, neither fulfilled no rejected.

//Fulfilled: The operation completed successfully.

//Rejected: The operation failed.

// Create a new Promise
// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation
//   let success = true; // Change this to false to see the reject case

//   if (success) {
//     resolve("Operation was successful!"); // Fulfilled state
//   } else {
//     reject("Operation failed."); // Rejected state
//   }
// });
// myPromise.then((message) => {
//     console.log(message); // Logs: Operation was successful!
//   })
//   .catch((error) => {
//     console.log(error); // Logs: Operation failed.
//   })
//   .finally(() => {
//     console.log("Operation completed, either way.");
//   }); // Always runs
