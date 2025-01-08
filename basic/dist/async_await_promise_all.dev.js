"use strict";

/* Using async-await with Promise.all
When you have multiple independent asynchronous tasks, you can use Promise.all with await to run them concurrently: */
function task1() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve("Task 1 completed");
    }, 1000);
  });
}

function task2() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve("Task 2 completed");
    }, 2000);
  });
}

function task3() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve("Task 3 completed");
    }, 1500);
  });
}

function runTasks() {
  var results;
  return regeneratorRuntime.async(function runTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Running tasks concurrently...");
          _context.next = 3;
          return regeneratorRuntime.awrap(Promise.all([task1(), task2(), task3()]));

        case 3:
          results = _context.sent;
          // Run tasks in parallel
          console.log("All tasks completed:", results);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

runTasks(); // Output:
// Running tasks concurrently...
// (All tasks completed after the longest delay)
// All tasks completed: [ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ]