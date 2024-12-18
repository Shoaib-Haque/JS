// The for...in loop in JavaScript is used to iterate over objects  mainly. 
// It retrieves the keys of the objects, unlike for...of, which retrieves the values.


let str = "Shoaib";
for(let i in str) {
    console.log(`value at ${i}: ${str[i]}`);
}

let arr = [10, 20, 30, 40, 50];
for(let i in arr) {
    console.log(`value at ${i}: ${arr[i]}`);
}

let obj = {
    key1: "apple",
    key2: "orange",
    key3: "grape"
}
for(let key in obj) {
    console.log(`value of ${key}: ${obj[key]}`);
}