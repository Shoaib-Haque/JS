/* Asynchronous iteration in JavaScript allows you to handle asynchronous data sources in a clean and structured way. 
The for await...of loop is a modern tool designed for iterating over data from asynchronous sources, 
such as Promises, async generators, or any object implementing the AsyncIterable protocol. */

const URLS = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];

(async () => {
    for await(let url of URLS) {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.title);
    }
})();

const PROMISES = [
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("1st");
        }, 2000);
    }),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("2nd");
        }, 5000);
    }),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("3rd");
        }, 10000);
    })
];

(async () => {
    for await (let res of PROMISES) {
        console.log(res);
    }
})();