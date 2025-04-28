/* 
Choose some pivot element, p, and partition your unsorted array, arr, into three smaller arrays: left, right, and equal, 
where each element in left < p, 
each element in right > p, 
and each element in equal = equal.
*/


function quickSort(arr) {
    let pivot = arr[0];
    let left = [];
    let equal = [];
    let right = [];

    for(let val of arr) {
        if(pivot == val) {
            equal.push(val);
        } else if(pivot > val) {
            left.push(val);
        } else if(pivot < val) {
            right.push(val);
        }
    }
    return left.concat(equal, right);
}

console.log(quickSort([5, 7, 4, 3, 8]));
console.log(quickSort([4, 5, 3, 7, 2]));
