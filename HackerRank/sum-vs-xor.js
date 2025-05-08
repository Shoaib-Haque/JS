/* 
Given an integer n, find each x such that:
- 0<= x<= n
- n+x == n⊕x

Return the number of 's satisfying the criteria.

Example
n = 4
There are four values that meet the criteria:
4+0 = 4⊕0 = 4
4+1 = 4⊕1 = 5
4+2 = 4⊕2 = 6
4+3 = 4⊕3 = 7

Return 4.
*/

function sumXor(n) {
    let count = 0;
    let d = parseInt(n/10);
    let e = n%10;
    // count = d*4;
    // if(e == 0) {
    //     return count;
    // }

    for(let i=0; i<=n; i++) {
        if(n+i == (n^i)) {
            count++;
        }
    }
    return count;
}

// console.log(sumXor(4));
// console.log(sumXor(5));
// console.log(sumXor(10));
console.log(sumXor(100));
console.log(sumXor(1000));
// console.log(sumXor(1000000000000000));
// console.log(sumXor(3434444444333));


