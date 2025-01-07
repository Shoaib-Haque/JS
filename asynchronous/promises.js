/* Understanding Asynchronous in JavaScript
JavaScript is single-threaded, meaning it executes one command at a time. 
However, to handle operations like network requests, file reading, or timers without blocking the main thread, 
JavaScript uses asynchronous programming.

Key Concepts of Asynchronous Programming in JavaScript
Synchronous: Executes code line by line, and each line waits for the previous one to complete.
Asynchronous: Allows some tasks to run in the background, enabling the next lines of code to execute immediately without waiting for the task to complete.
How Does Asynchronous Work?
Asynchronous behavior in JavaScript is achieved using:

Callbacks: A function passed as an argument to another function to be executed later.
Promises: Objects representing the eventual completion (or failure) of an asynchronous operation.
async/await: Modern syntax for handling asynchronous operations in a cleaner way. */


// Example: Using Promises

/* Explanation:

The Promise object starts the asynchronous operation (fetching data).
The .then method waits for the promise to resolve, then logs the data.
The main thread continues executing (console.log("End")) without waiting for the promise. */

console.log("Start");

const fetchData = new Promise((resolve, reject) => {
  if(0) {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Error!");
    }, 2000);
  }
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("End");