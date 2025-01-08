/* Using async-await with Promise.all
When you have multiple independent asynchronous tasks, you can use Promise.all with await to run them concurrently: 
All tasks complete after the longest delay */

// Output:
// This is task 1
// This is task 3
// This is task 2
// All tasks completed: [ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ] 

const task1 = () => {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log("This is task 1");
            resolve("Task 1 completed");
        }, 2000);
    });
};

const task2 = () => {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log("This is task 2");
            resolve("Task 2 completed");
        }, 10000);
    });
};

const task3 = () => {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log("This is task 3");
            resolve("Task 3 completed");
        }, 5000);
    });
};

const runTasks = async () => {
    let responses = await Promise.all([task1(), task2(), task3()]);
    console.log(responses);
}

runTasks();