/* const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data1");
        }, 4000);
    });
}

const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data2");
        }, 4000);
    });
}

console.log("Fetching data1....");
const promise1 = fetchData1();
promise1
.then((res) => {
    console.log(res);
})

console.log("Fetching data2....");
const promise2 = fetchData2();
promise2
.then((res) => {
    console.log(res);
}) */


/* Problem in this above code is the both will be finished at the same time point
If there is a need that after only first promise has resolved then only the 2nd promise will be called, it wont work that way.
Here comes promises chain to resolve this issue */

/* const fetchData3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data3");
        }, 2000);
    });
}

const fetchData4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data4");
        }, 5000);
    });
}

console.log("Fetching data3....");
const promise3 = fetchData3();
promise3
.then((res) => {
    console.log(res);
    console.log("Fetching data4....");
    const promise4 = fetchData4();
    promise4
    .then((res) => {
        console.log(res);
    })
}); */


/* Real promise chain */

/* A real promise chain is a series of promises executed sequentially, 
where the output of one step (or promise) can be passed to the next. 
This allows you to perform asynchronous operations in a structured and readable manner, avoiding the "callback hell" problem.

In a real-world promise chain, each .then() block handles a promise, and the chain proceeds only when the current promise is resolved. 
If any promise is rejected, the .catch() block at the end handles the error. */

/* To handle errors in a promise chain, you can use a .catch() at the end of the chain. 
This .catch() will catch any error that occurs in the entire chain. 
If an error is thrown or a promise is rejected in any .then() block, the .catch() block will handle it.
Here’s how you can add a .catch() to your promise chain: */

/* Key Points:
If a promise is rejected, or an error is thrown in any .then() block, the control skips to the nearest .catch() block.
Once the .catch() is executed, the promise chain stops further execution. */

const check1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data > 5) {
                reject(`Error at data ${data}`); // Simulate an error for data 10
            } else {
                resolve(`check1 data ${data}`);
            }
        }, 3000);
    });
};

const check2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data > 5) {
                reject(`Error at data ${data}`); // Simulate an error for data 10
            } else {
                resolve(`check2 data ${data}`);
            }
        }, 3000);
    });
};

check1(1)
    .then((res) => {
        console.log(res);
        return check2(2);
    })
    .then((res) => {
        console.log(res);
        return check1(3); 
    })
    .then((res) => {
        console.log(res);
        return check1(4);
    })
    .then((res) => {
        console.log(res);
        return check1(10); // This will trigger an error
    })
    .then((res) => {
        console.log(res);
        return check1(5);  // wont be executed
    })
    .catch((err) => {
        console.error("Caught an error:", err);
    })
    .finally(() => {
        console.log("Process completed.");
    });