/* 
Given an array of integers and a positive integer k, determine the number of (if, j) pairs where i<j and arr[i]+arr[j]  is divisible by k.

Example
n = 6
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6].
return 3
*/

function divisibleSumPairs(n, k, ar) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j <= n; j++) {
            if((ar[i]+ar[j])%k == 0) {
                cnt++;
            }
        } 
    }

    return cnt;
}


const n = 6;
const ar = [1, 2, 3, 4, 5, 6];
const k = 5;
console.log(divisibleSumPairs(n, k, ar));

const n1 = 6;
const ar1 = [1, 3, 2, 6, 1, 2];
const k1 = 3;
console.log(divisibleSumPairs(n1, k1, ar1));

