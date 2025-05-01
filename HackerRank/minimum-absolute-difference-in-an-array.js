/* 
Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):
int arr[n]: an array of integers

Returns
int: the minimum absolute difference found
*/


function minimumAbsoluteDifference(arr) {
    let min = undefined;
    arr = arr.sort((a, b) => a-b);
    for(let i=0; i<arr.length-1; i++) {
        if(min == undefined || min > Math.abs(arr[i] - arr[i+1])) {
            min = Math.abs(arr[i] - arr[i+1]);
        }
    }
    return min;
}

console.log(minimumAbsoluteDifference([-2, 2, 4])); // 2
console.log(minimumAbsoluteDifference([3, -7, 0])); // 3
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])); // 1 
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); // 3