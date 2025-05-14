/* 
We define a magic square to be an n*n matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a 3*3 matrix s of integers in the inclusive range [1, 9]. We can convert any digit a to any other digit b in the range [1, 9] at cost of |a-b|. 
Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9].

Example:
s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:
5 3 4
1 5 8
6 4 2

We can convert it to the following magic square:
8 3 4
1 5 9
6 7 2

This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.
*/

function formingMagicSquare(s) {
    let cost = 0;
    let minCost;
    const magics = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];

    let magic;
    for(let i=0; i<magics.length; i++) {
        magic = magics[i];
        for(let j=0; j<magic.length; j++) {
            for(let k=0; k<magic[j].length; k++) {
                cost += Math.abs(magic[j][k] - s[j][k]);
            }
        }
        if(minCost == undefined || cost < minCost) {
            minCost = cost;
        }
        cost = 0;
    }
    
    return minCost;
}

console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])); // 12 14 12 // 7
console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])); // 15 15 14 // 1
console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]])); // 14 16 13 // 4
console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]])); // 17  7 17  // 14

/* 

5  3   4 = 12, 3
1  5   8 = 14, 1
6  4   2 = 12, 3
12 12 14
3   3  1

4  5  8 = 17, 2
2  4  1 = 7,  8
1  9  7 = 17, 2
7 18 16
8  3  1
*/
