/* 
The distance between two array values is the number of indices between them. 
Given a, find the minimum distance between any pair of equal elements in the array. 
If no such value exists, return -1.

Example
a = [3, 2, 1, 2, 3]
2 3s [0, 4], so d = |j-i| = 4
2 2s [1, 3], so d = |j-i| = 2

So, return 2
*/  

function minimumDistances(a) {
    let nextSlice;
    let j;
    let d;
    let min = -1;
    for(let i=0; i<a.length; i++) {
        nextSlice = a.slice(i+1);
        if(nextSlice.includes(a[i])) {
            j = nextSlice.indexOf(a[i])+(i+1);
            d = Math.abs(j-i);
            if(min == -1 || d<min) {
                min = d;
            }
        }
    }
    return min;
}

const a = [3, 2, 1, 2, 3];
console.log(minimumDistances(a)); // 2

const a1 = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(a1)); // 3
