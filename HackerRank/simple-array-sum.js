/* 
Given an array of integers, find the sum of its elements.

For example, if the array , ar = [1, 2, 3], so return 6.
*/


function simpleArraySum(ar) {
    let sum = 0;
    /* for(let index in ar) {
        sum += ar[index];
    } */

    /* for(let item of ar) {
        sum += item;
    } */

    /* ar.forEach((item, index) => {
        sum += item;
    }); */

    /* ar.map((item, index) => {
        sum += item;
    }) */

    sum = ar.reduce((prev, curr) => {
        return prev+curr;
    })

    return sum;
}

function aVeryBigSum(arr) {
    let sum = 0;
    sum += arr.reduce((prev, curr) => {
        return prev+curr;
    });
    return sum;
}

const ar = [1, 2, 3];
console.log(simpleArraySum(ar));
const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr));

