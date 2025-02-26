/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1, 3, 5, 7, 9]
The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24. The function prints
16 24
*/


function miniMaxSum(arr) {
    /* 
    let min;
    let max;
    let sum = 0;
    let newArr;
    for(let i=0; i<arr.length; i++) {
        newArr = arr.filter((val, index) => {
            if(index!=i) {
                return val;
            }
        });

        sum = newArr.reduce((prev, curr) => {
            return prev+curr;
        });

        if(i==0 || min>sum) {
            min = sum;
        }
        if(i==0 || max<sum) {
            max = sum;
        }
    }
    console.log(min, max); 
    */

    let min = 0;
    let max = 0;
    arr = arr.sort((a,b) => a-b);
    arr.map((val, index) => {
        if(index<4) {
            min += val;
        }
        if(index>0) {
            max += val;
        }
    });

    console.log(min, max);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);