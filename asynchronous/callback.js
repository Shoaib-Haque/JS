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

// Example: Asynchronous Code with callback
const callBack = () => {
    console.log(`This line will be executed after the timeout`);
}

console.log("1");
console.log("2");
setTimeout(callBack, 5000);
// This line execution wont be delayed for the setTimeout method as it is a asynchronous method
console.log("3"); 
console.log("4");