/* Promise.all() is a method in JavaScript that takes an array of promises (or values) and returns a single promise. 
This returned promise resolves when all promises in the array are resolved, or rejects as soon as one promise is rejected. 
It's commonly used when you need to wait for multiple asynchronous operations to complete successfully. */


/* Key Characteristics of Promise.all()
Resolves Only When All Promises Resolve:
If all promises in the array resolve, the returned promise resolves with an array of the resolved values in the same order as the original array.

Rejects Immediately on Any Rejection:
If one promise rejects, the returned promise rejects with the reason of the first rejected promise, and the other promises are ignored.

Handles Mixed Inputs:
The array can include non-promise values. These are treated as already resolved.
 */

// 1. All Promises Resolve
const resolvedPromises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved 1st promise");
        }, 2000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved 2nd promise");
        }, 10000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved 3rd promise");
        }, 5000);
    }),
];


/* Promise.all(resolvedPromises)
.then((p) => {
    console.log(p);
    p.forEach((val) => {
        console.log(val);
    })
})
.catch((err) => {
    console.log(err);
}); */

// One Promise Rejects
const rejectPromises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved 1st promise");
        }, 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected 2nd promise");
        }, 10000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved 3rd promise");
        }, 5000)
    })
];

/* Promise.all(rejectPromises)
.then((p) => {
    p.foreach((item) => {
        console.log(item);
    });
})
.catch((err) => {
    console.log(err);
}); */


// Using with async-await
const asyncFunc1 = async () => { 
    // working with multiple promise in a single async does not work normally
    // either use multiple async function 
    try {
        let resolvedP = await Promise.all(resolvedPromises);
        console.log(resolvedP);
        // will create issue
        // let results = await Promise.all(rejectPromises);
        // console.log("All promises resolved:", results);
    } catch (error) {
        console.error("One or more promises rejected:", error);
    }

    // will create issue
    // try {
    //     let results = await Promise.all(rejectPromises);
    //     console.log("All promises resolved:", results);
    // } catch (error) {
    //     console.error("One or more promises rejected:", error);
    // }
};

const asyncFunc2 = async () => {
    try {
        let results = await Promise.all(rejectPromises);
        console.log("All promises resolved:", results);
    } catch (error) {
        console.error("One or more promises rejected:", error);
    }
};

asyncFunc1();
asyncFunc2();


// 
const asyncFunc = async () => {
    try {
        // const [res1, res2] = await Promise.all([resolvedPromises, rejectPromises]);
        const [res1, res2] = await Promise.all([resolvedPromises, rejectPromises]);
        console.log('res1', res1);
        console.log('res2', res2);
    } catch (err) {
        console.log(err);
    }
};

// asyncFunc();