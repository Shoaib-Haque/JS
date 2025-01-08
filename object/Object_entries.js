/* 
Essentially, it transforms an object into an array of key-value pairs, which can then be easily iterated over.

Return Value:
It returns an array of arrays, where each inner array contains two elements:

The first element is the key.
The second element is the value associated with that key in the object. */

const obj = {a : 'apple', b : 'banana', g : 'grape'};
console.log('iterate using for..of loop');
for(let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
console.log();

/* Filtering Object Entries:
You can filter entries based on certain criteria (e.g., to include only entries with numeric values): */
const marks = {a : 27, b : 33, c : 25, d : 90};
console.log('filtering');
let passedStudent = Object.entries(marks).filter(([key, value]) => {
    return value >= 33;
});
console.log(passedStudent);

console.log();
/* Converting Object Entries Back to an Object:
You can convert the array of entries back into an object using Object.fromEntries(): */

const person = [["name", "Charlie"], ["age", 35], ["city", "San Francisco"]];
console.log('Converting Object Entries Back to an Object');
const personObj = Object.fromEntries(person);
console.log(personObj);
console.log();

/* Transforming Object Data: Convert an object into an array, manipulate its values, and then convert it back: */
console.log("Transforming Object Data: Convert an object into an array, manipulate its values, and then convert it back");
let numbers = {one : 1, two : 2, three : 3};
let square = Object.fromEntries(Object.entries(numbers).map(([key, value]) => {
    return [key, value*value];
}));

console.log(square);
