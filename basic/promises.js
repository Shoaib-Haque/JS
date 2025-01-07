/* A JavaScript Promise represents a value that may be available now, or in the future, or never. It is a placeholder for asynchronous operations, allowing you to handle asynchronous tasks in a cleaner and more predictable way than callbacks.

States of a Promise
Pending: The promise is neither fulfilled nor rejected.
Fulfilled: The promise is resolved successfully, and a result is available.
Rejected: The promise has failed, and an error or reason is provided. */

/* How It Works
The fetchData promise simulates fetching data after a delay using setTimeout.
Depending on the value of a and b, the promise is resolved or rejected.
The .then() method handles the successful resolution.
The .catch() method handles errors or rejections.
The .finally() block runs no matter the outcome, which is useful for cleanup tasks.
*/

const fetchData = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a>b) {
                resolve(`${a} is greater than ${b}`);
            } else {
                reject(`${a} is smaller than ${b}`);
            }
        }, 5000)
    });
}

const res1 = fetchData(10, 5);
res1
    .then((data) => {
        console.log(data);
        
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Operation complete."); // Runs regardless of outcome
    });

const res2 = fetchData(10, 50);
res2
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Operation complete."); // Runs regardless of outcome
    });