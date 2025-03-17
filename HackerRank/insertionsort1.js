/* 
Given a sorted list with an unsorted number e in the rightmost cell, 
can you write some simple code to insert e into the array so that it remains sorted?

None: Print the interim and final arrays, each on a new line. No return value is expected.
*/

function insertionSort1(n, arr) {
    let min = arr[n-1];
    for(let i=n-1; i>=0; i--) {
        if(min < arr[i-1]) {
            arr[i] = arr[i-1];
            console.log(arr.join(' '));
        } else {
            arr[i] = min;
            console.log(arr.join(' '));
            break;
        }
    }
}

insertionSort1(5, [1, 2, 4, 5, 3]);
insertionSort1(5, [2, 4, 6, 8, 3]);