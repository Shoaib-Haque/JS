// filter method creates a new array of elements that give true for a condition/filter
// like forEach map callback can take three parameter, index and array are optional
// unlike forEach it can returns result for each value and can form a new array based on condition

let arr = [10, 15, 20, 25, 30, 35];

let newArr = arr.filter((val, i, array) => {
    return val%2 == 0; // if true for current val then the val will be store in the newArr
})

console.log(newArr);

let marks = [97, 64, 32, 49, 99, 96, 86];

let filteredMarks = marks.filter((val) => {
    return val > 90;
});

console.log(filteredMarks);

