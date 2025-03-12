/* 
Given a sequence of integers , a triplet (arr[i], arr[j], arr[k]) is beautiful if:
1. i < j < k
2. arr[j]-arr[i] = arr[k]-arr[j] = d

Given an increasing sequenc of integers and the value of d, count the number of beautiful triplets in the sequence.

Example
arr = [2, 2, 3, 4, 5]
d = 1;

There are 3 beautiful triplets
(0, 2, 3), (1, 2, 3), (2, 3, 4)
*/

function beautifulTriplets(d, arr) {
    let cnt = 0;
    // for (let i = 0; i < arr.length-2; i++) {
    //     for (let j = i+1; j < arr.length-1; j++) {
    //         if(arr[j]-arr[i] == d) {
    //             for (let k = j+1; k < arr.length; k++) {
    //                 if(arr[k]-arr[j] == d) {
    //                     cnt++;
    //                 } else if(arr[k]-arr[j] > d) {
    //                     break;
    //                 }
    //             }
    //         } else if(arr[j]-arr[i] > d) {
    //             break;
    //         }
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        if(arr.includes(arr[i]+d) && arr.includes(arr[i]+(d*2))) {
            cnt++;
        }
    }
    return cnt;
}

const arr = [2, 2, 3, 4, 5];
const d = 1;
console.log(beautifulTriplets(d, arr)); // 3

const arr1 = [1, 2, 4, 5, 7, 8, 10];
const d1 = 3;
console.log(beautifulTriplets(d1, arr1)); // 3

