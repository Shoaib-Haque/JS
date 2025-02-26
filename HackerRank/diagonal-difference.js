/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:
1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 15.
The right-to-left diagonal = 17.
Their absolute difference is 2.
*/


function diagonalDifference(arr) {
    let a = 0;
    let b = arr.length-1;
    let sumA = 0;
    let sumB = 0;

    /* for(let i=0; i<arr.length; i++) {
        sumA += arr[i][a];
        sumB += arr[i][b];
        a++;
        b--;
    } */

    for(let item of arr) {
        sumA += item[a];
        sumB += item[b];
        a++;
        b--;
    }

    if(sumA >= sumB) {
        return sumA - sumB;
    } else {
        return sumB - sumA;
    }
}

const arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log(diagonalDifference(arr));
