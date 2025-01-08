// performs some operations & reduce the array to a single value. Finally it returns that single value.

let arr = [1, 2, 3, 4];
let sum = 0;
sum = arr.reduce((previousVal, currentVal) => {
    return previousVal + currentVal;
});

console.log(sum); //10

// at first iteration it takes index 0 as previousVal, index 1 as current. So, 1+2 = 3;
// then it takes the result 3 as previous, and index 2 as current. So, 3+3 = 6;
// then it takes the result 6 as previous, and index 3 as current. Sp, 6+4 = 10 (final value)


let items = [5, 6, 2, 1, 3];

let largest = items.reduce((previous, current) => {
    return previous > current ? previous : current;
})

console.log(largest);

let n = 5;
let arrNum = [];

for(let i=1; i<=n; i++) {
    arrNum[i-1] = i;
}
console.log(arrNum);

let sumN = arrNum.reduce((previous, current) => {
    return previous+current;
});

console.log(sumN);

let mulN = arrNum.reduce((previous, current) => {
    return previous*current;
});
console.log(mulN);