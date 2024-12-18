// var: Declares a property on the global window object (in browsers) when defined globally.

var e = 70;
console.log(window.e); // 70

// let: Does not create a property on the global window object when defined globally.

let f = 80;
console.log(window.f); // undefined