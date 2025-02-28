/* 
You are given a number of sticks of varying lengths. 
You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. 
At each iteration you will determine the length of the shortest stick remaining, 
cut that length from each of the longer sticks and then discard all the pieces of that shortest length. 
When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

Example
arr = [1, 2, 3]
The shortest stick length is 1, so cut that length from the longer two and discard the pieces of length 1. 
Now the lengths are arr = [1, 2]. Again, the shortest stick is of length 1, so cut that amount from the longer stick and discard those pieces. 
There is only one stick left, arr = [1] , so discard that stick. The number of sticks at each iteration are [3, 2, 1].
*/

function cutTheSticks(arr) {
    arr = arr.sort((a,b) => a-b)
    let min;
    let ans = [];
    let nextIndex = 0;
    let k = 0;
    while(arr.length) {
        ans[k] = arr.length;
        min = arr[0];
        arr.map((val, i, arr) => {
            if(val>min) {
                arr[i] = val-min;
            } else {
                nextIndex = i+1;
            }
        });
        console.log(arr);
        arr = arr.slice(nextIndex,arr.length);
        k++;
    }
    return ans;
}

const arr = [1, 2, 3];
console.log(cutTheSticks(arr)); //[3, 2, 1]

const arr1 = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr1)); // [6, 4, 2, 1]

const arr2 = [1, 2, 3, 4, 3, 3, 2, 1];
console.log(cutTheSticks(arr2)); // [8, 6, 4, 1]

const arr3 = [1, 13, 3, 8, 14, 9, 4, 4];
console.log(cutTheSticks(arr3)); // [8, 7, 6, 4, 3, 2, 1]
