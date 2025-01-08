// var: Hoisted and initialized to undefined.
// A var variable can be used before its declaration, but it will return undefined due to hoisting.

console.log(a); // undefined
var a = 5;

// let: Hoisted but not initialized.
// A let variable cannot be used before its declaration; doing so results in a ReferenceError.

console.log(b); // ReferenceError: Cannot access 'b' before initialization

let b = 10;