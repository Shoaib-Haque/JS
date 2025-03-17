/* 
Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. 
She starts following the trail and notices that any two consecutive stones' numbers differ by one of two values. 
Legend has it that there is a treasure trove at the end of the trail. 
If Manasa can guess the value of the last stone, the treasure will be hers.
*/

function stones(n, a, b) {
    let sum = 0;
    let res = [];
    const min = a <= b ? a : b;
    const max = a > b ? a : b;
    
    for(let i=1; i<=n; i++) {
        sum = (min*(n-i)) + (max*(i-1));
        if(!res.includes(sum)) {
            res.push(sum);
        }
    }

    return res;
}

console.log(stones(3, 2, 3));
console.log(stones(3, 1, 2));
console.log(stones(4, 10, 100));
console.log(stones(7, 9, 11));
console.log(stones(58, 69, 24));
console.log(stones(83, 86, 81));
console.log(stones(73, 25, 25));
console.log(stones(12, 73, 82));
console.log(stones(5, 3, 23));

