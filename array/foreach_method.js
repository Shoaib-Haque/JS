// The callback function of the forEach method can take three parameters, last two are optionals:

// Current Value (value): The current element in the array being processed.
// Index (index): The index of the current element.
// Array (array): The entire array forEach is iterating over.

let arr = [1, 2, 3, 4, 5];

console.log(`using all three params`);
arr.forEach(function printIndexValue(val, i, array) {
    console.log(`at ${i}: ${val}, ${array}`);
})

console.log(`using value and index`);
arr.forEach(function printIndexValue(val, i) {
    console.log(`at ${i}: ${val}`);
})

console.log(`using only value`);
arr.forEach(function printValue(val) {
    console.log(val);
})


// can be done with arrow function
console.log(`using arrow function`);
arr.forEach((val, i, array) => {
    console.log(`at ${i}: ${val}`);
})


let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num**2);
})

console.log(`pass a variable as callback into forEach which has the function definition`);
let printSquare = (num) => {
    console.log(num**2);
}

let n = [10, 20, 30];
n.forEach(printSquare);

// forEach is a higher order function. 
// Higher order function in javascript are those function who either take another function as a parameter or return another function.
// A callback is a function passed as an argument to another function