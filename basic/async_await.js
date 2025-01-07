/* async and await in JavaScript are modern syntax constructs built on 
Promises that make writing asynchronous code more readable and easier to understand. 
They help avoid "callback hell" and make asynchronous code look and behave like synchronous code.

Key Concepts

async Function:
Declares a function as asynchronous.
Always returns a Promise, even if you don’t explicitly return one.
The value returned by the async function is automatically wrapped in a resolved Promise.

await Keyword:
Can only be used inside async functions.
Pauses the execution of the async function until the Promise is resolved or rejected.
Resumes the execution with the resolved value of the Promise or throws an error if the Promise is rejected.
async and await in JavaScript are modern syntax constructs built on Promises that make writing asynchronous 
code more readable and easier to understand. They help avoid "callback hell" and make asynchronous code look and behave like synchronous code.
 */

// Basic Example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate a 2-second delay
    });
}

async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Wait for the Promise to resolve
    console.log(data);
}

getData();

const check = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(val >= 10) {
                resolve(`${val} is greater than or equal to 10`);
            } else {
                reject(`${val} is smaller than 10`);
            }
        }, 3000)
    });
};

const checkData = async (val) => {
    try {
        let res = await check(val);
        console.log(res);
    } catch(err) {
        console.log(`error: ${err}`);
    }
};

checkData(15);
checkData(5);


/* Detailed Example: Real Use Case
Let’s simulate fetching a user, their posts, and comments for the first post: */

// Simulated API calls
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 101, title: "Post 1" },
                { id: 102, title: "Post 2" }
            ]);
        }, 1000);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Comment 1", "Comment 2", "Comment 3"]);
        }, 1000);
    });
}

// Async function using await
async function displayUserData() {
    try {
        const user = await fetchUser(); // Wait for user data
        console.log("User:", user);

        const posts = await fetchPosts(user.id); // Wait for posts data
        console.log("Posts:", posts);

        const comments = await fetchComments(posts[0].id); // Wait for comments on the first post
        console.log("Comments for the first post:", comments);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

displayUserData();



