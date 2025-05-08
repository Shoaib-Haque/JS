/* 
Given two integers, l and r, find the maximal value of a xor b, written a⊕b.

For example, if l=11 and r=12, then
11⊕11 = 0
11⊕12 = 7
12⊕12 = 0
Our maximum value is 7.
*/


function maximizingXor(l, r) {
    let max = 0;
    let j;
    for(let i=l; i<=r; i++) {
        j = i;
        while(j<=r) {
            if(max<(i^j)) {
                max = i^j;
            }
            j++;
        }
    }
    return max;
}

console.log(maximizingXor(11, 12));
console.log(maximizingXor(10, 15));
console.log(maximizingXor(11, 100));



