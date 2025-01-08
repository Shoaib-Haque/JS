/* Using async-await with Promise.all
When you have multiple independent asynchronous tasks, you can use Promise.all with await to run them concurrently: */

function task1() {
    return new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000));
}

function task2() {
    return new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000));
}

function task3() {
    return new Promise((resolve) => setTimeout(() => resolve("Task 3 completed"), 1500));
}
  
async function runTasks() {
    console.log("Running tasks concurrently...");
    const results = await Promise.all([task1(), task2(), task3()]); // Run tasks in parallel
    console.log("All tasks completed:", results);
}

runTasks();

// Output:
// Running tasks concurrently...
// (All tasks completed after the longest delay)
// All tasks completed: [ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ]
