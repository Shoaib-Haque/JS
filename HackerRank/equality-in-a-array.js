/* 
Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.
Example
arr = [1, 2, 2, 3]
return 2
*/


function equalizeArray(arr) {
    arr = arr.sort((a,b) => a-b);
    let currVal;
    let max = 0;
    let cnt = 1;
    for(let val of arr) {
        if(currVal != val) {
            currVal = val;
            cnt = 0;
        }
        cnt++;
        if(cnt > max) max = cnt;
    }
    return arr.length-max;
}

const arr = [1, 2, 2, 3];
console.log(equalizeArray(arr)); //2

const arr1 = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr1)); //2
