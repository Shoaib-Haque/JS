/* 
Given two arrays of integers, find which elements in the second array are missing from the first array.

Example
arr = [7, 2, 5, 3, 5, 3]
brr = [7, 2, 5, 4, 6, 3, 5, 3]

The brr array is the original list. The numbers missing are [4, 6].

Notes

If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
Return the missing numbers sorted ascending.
Only include a missing number once, even if it is missing multiple times.
The difference between the maximum and minimum numbers in the original list is less than or equal to 100.

Function Description
Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

missingNumbers has the following parameter(s):
int arr[n]: the array with missing numbers
int brr[m]: the original array of numbers

Returns
int[]: an array of integers
*/

const missingNumbers = (arr, brr) => {
    let res = [];
    let item, aIndex;
    arr = arr.sort((a, b) =>  a- b);
    brr = brr.sort((a, b) =>  a- b);
    for(let i=0; i<brr.length; i++) {
        item = brr[i];
        if(arr.includes(item)) {
            aIndex = arr.indexOf(item);
            while(item == brr[i+1]) {
                if(!res.includes(item) && item != arr[++aIndex]) {
                    res.push(item);
                }
                i++;
            }
        } else {
            res.push(item);
        }
    }
    return res;
};

const arr = [7, 2, 5, 3, 5, 3];
const brr = [7, 2, 5, 4, 6, 3, 5, 3];
console.log(missingNumbers(arr, brr));

const arr1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr1 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr1, brr1));