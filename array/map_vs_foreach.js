/* map:

Used to create a new array by applying a transformation function to each element of the original array.
It returns the new array.
forEach:

Used to execute a function on each element of the array, primarily for side effects (e.g., logging, updating external variables).
It does not return anything (returns undefined). */

/* map: Always returns a new array containing the transformed elements. */
const arr = [10, 20, 30, 40];

console.log("map creates new array");
let newArr = arr.map((item, key) => {
    return item*2;
});
console.log('new array: ', newArr);
console.log();
/* forEach: Does not return a new array. Any changes made within the callback are not captured as a return value. */
console.log('forEach only iterates');
arr.forEach((item, key) => {
    console.log(key, item);
})
console.log();
console.log("map can be chained");
/* map: Can be chained with other array methods since it returns a new array. */
const numbers1 = [1, 2, 3];
const result1 = numbers1
  .map(num => num * 2)
  .filter(num => num > 3);
console.log(result1); // [4, 6]
console.log();
console.log("foreach can not be chained");
/* forEach: Cannot be chained since it returns undefined. */
const numbers2 = [1, 2, 3];
const result2 = numbers2.forEach(num => num * 2); // undefined
console.log(result2); // undefined

/* map: Does not modify the original array (it’s immutable). */

console.log();
console.log("map does not modify the original array");
const numbers3 = [1, 2, 3];
const doubled = numbers3.map(num => num * 2);
console.log(numbers3); // [1, 2, 3] (unchanged)

/* forEach: Can mutate the original array if the callback modifies its elements directly. */
console.log();
console.log("foreach can mutate the original array if the callback modifies its elements directly.");
const numbers4 = [1, 2, 3];
numbers4.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers4); // [2, 4, 6] (modified)