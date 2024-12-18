// var: Allows re-declaration within the same scope.

var c = 30;
var c = 40; // No error
console.log(c); // 40

// let: Does not allow re-declaration within the same scope.

let d = 50;
let d = 60; // SyntaxError: Identifier 'd' has already been declared