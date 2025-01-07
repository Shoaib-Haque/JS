/* A callback in JavaScript is a function passed as an argument to another function, 
which is executed after the completion of that function. 
It is a way to make code asynchronous, 
allowing certain operations to continue without blocking the execution of the rest of the program.

Key Points About Callbacks
Passed as Arguments: A callback is passed as a parameter to another function.
Executed Later: The callback is invoked after the completion of the operation.
Used in Asynchronous Code: Callbacks are widely used in asynchronous operations like file reading, API requests, or timers. */

/* Example: Synchronous Callback
Here’s an example of a synchronous callback: */

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Pass `sayGoodbye` as a callback to `greet`
greet("Alice", sayGoodbye);

/* Example: Asynchronous Callback
Callbacks are more commonly used in asynchronous operations. 
Here's an example with setTimeout: */

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data); // Call the callback with the fetched data
    }, 2000); // Simulate a delay of 2 seconds
}

function processData(data) {
    console.log("Processing data:", data);
}

// Pass `processData` as a callback to `fetchData`
fetchData(processData);
