/* 
In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. 
Since the array composed of just the first element is already sorted, begin printing after placing the second element.
*/

function insertionSort2(n, arr) {
    let checkItem;
    for(let i=1; i<arr.length; i++) {
        checkItem = arr[i];
        for(let j=i-1; j>=0; j--) {
            if(arr[i] < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = checkItem;
            }
        }
        console.log(arr.join(" "));
    }
}

insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]);
insertionSort2(6, [1, 4, 3, 5, 6, 2]);