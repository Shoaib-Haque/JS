/* 
Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

Example
arr = [5, 6, 8, 11]
8 is between two sub-arrays that sum to 11.

Returns
string: either YES or NO
*/

function sum(arr) {
    return arr.reduce((total, val) => total+val, 0);
}

function balancedSums(arr) {
    for(let i=0; i<arr.length; i++) {
        if(sum(arr.slice(0, i)) == sum(arr.slice(i+1))) {
            return "YES";
        } else if(sum(arr.slice(0, i)) > sum(arr.slice(i+1))) {
            return "NO";
        }
    }
    return "NO";
}

const arr = [5, 6, 8, 11];
console.log(balancedSums(arr));

const arr1 = [1, 2, 3];
console.log(balancedSums(arr1));

const arr2 = [1, 2, 3, 3];
console.log(balancedSums(arr2));

const arr3 = [1, 1, 4, 1, 1];
console.log(balancedSums(arr3));

const arr4 = [2, 0, 0, 0];
console.log(balancedSums(arr4));

const arr5 = [0, 0, 4, 0];
console.log(balancedSums(arr5));
