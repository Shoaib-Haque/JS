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


// Example: Using async/await

/* Explanation:

The await keyword pauses the execution of fetchAsync until fetchData resolves.
However, console.log("End") runs immediately because fetchAsync runs in the background. */


console.log("Start");

const fetchData = () => {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

const fetchAsync = async () => {
  const data = await fetchData(); // Wait for the promise to resolve
  console.log(data);
};

fetchAsync();

console.log("End");
