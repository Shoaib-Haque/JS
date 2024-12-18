// The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, and more. 
// It retrieves the values of the iterable, unlike for...in, which retrieves the keys.

let str = "Shoaib";
for(let char of str) {
    console.log(char);
}

let arr = [10, 20, 30, 40, 50];
for(let val of arr) {
    console.log(val);
}