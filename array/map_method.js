// map creates a new array with the results its callback returns.
// like forEach map callback can take three parameter, index and array are optional
// unlike forEach it can returns result for each value and can form a new array

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((val, i, array) => {
    return val*2;
})

console.log(newArr);
