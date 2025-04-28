/* 
Can you modify your previous Insertion Sort implementation(insertionsort2.js) to keep track of the number of shifts it makes while sorting? 
The only thing you should print is the number of shifts made by the algorithm to completely sort the array. 
A shift occurs when an element's position changes in the array. 
Do not shift an element if it is not necessary.
*/

function runningTime(arr) {
    // Write your code here
    let count = 0;
    let checkItem;
    for(let i=1; i<arr.length; i++) {
        checkItem = arr[i];
        for(let j=i-1; j>=0; j--) {
            if(checkItem < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = checkItem;
                count++;
            }
        }
    }
    return count;
}

console.log(runningTime([2, 1, 3, 1, 2]));
console.log(runningTime([4, 4, 3, 4]));

