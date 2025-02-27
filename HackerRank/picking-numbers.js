/* 
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 items.
*/


function pickingNumbers(a) {
    a = a.sort((a, b) => a-b);
    let lastVal = undefined;
    let lastMin = undefined;
    let tempCnt = 1;
    let lastCnt = 1;
    let maxLength = 0;
    for(let val of a) {
        if(lastVal == undefined) {
            lastVal = val;
            lastMin = val;
        } else {
            if(val-lastMin<=1) {
                tempCnt++;
                maxLength = tempCnt>maxLength ? tempCnt : maxLength;
            } else {
                if(val-lastVal > 1) {
                    lastMin = val;
                    tempCnt = 1;
                } else if(val-lastVal <= 1) {
                    lastMin = lastVal;
                    tempCnt = 1+lastCnt;
                }
            }
            if(lastVal == val) {
                lastCnt++;
            } else {
                lastCnt = 1;
            }
        }
        
        lastVal = val;
    }
    
    return maxLength;
}

const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
console.log(pickingNumbers(a)); //5

const a1 = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a1)); //3 [1, 3, 3, 4, 5, 6] 1, 3

const a2 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(a2)); //5

const a3 = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4];
console.log(pickingNumbers(a3)); //22

const a4 = [84, 43, 11, 41, 2, 99, 31, 32, 56, 53, 42, 14, 98, 27, 64, 57, 16, 33, 48, 21, 46, 61, 87, 90, 28, 12, 62, 49, 29, 77, 82, 70, 80, 89, 95, 52, 13, 19, 9, 79, 35, 67, 51, 39, 7, 1, 66, 8, 17, 85, 71, 97, 34, 73, 75, 6, 91, 40, 96, 65, 37, 74, 20, 68, 23, 47, 76, 55, 24, 3, 30, 22, 55, 5, 69, 86, 54, 50, 10, 59, 15, 4, 36, 38, 83, 60, 72, 63, 78, 58, 88, 93, 45, 18, 94, 44, 92, 81, 25, 26];
console.log(pickingNumbers(a4)); //3

const a5 = [9, 6, 13, 16, 5, 18, 4, 10, 3, 19, 4, 5, 8, 1, 13, 10, 20, 17, 15, 10, 6, 10, 13, 20, 18, 17, 7, 10, 6, 5, 16, 18, 13, 20, 19, 7, 16, 13, 20, 17, 4, 17, 8, 19, 12, 7, 17, 1, 18, 3, 16, 4, 5, 3, 15, 17, 6, 17, 14, 11, 11, 7, 11, 6, 15, 15, 12, 6, 17, 19, 8, 6, 13, 9, 10, 19, 14, 18, 7, 9, 11, 16, 11, 20, 4, 20, 10, 7, 8, 4, 2, 12, 11, 8, 12, 13, 19, 8, 8, 5];
console.log(pickingNumbers(a5)); //13

const a6 = [14, 18, 17, 10, 9, 20, 4, 13, 19, 19, 8, 15, 15, 17, 6, 5, 15, 12, 18, 2, 18, 7, 20, 8, 2, 8, 11, 2, 16, 2, 12, 9, 3, 6, 9, 9, 13, 7, 4, 6, 19, 7, 2, 4, 3, 4, 14, 3, 4, 9, 17, 9, 4, 20, 10, 16, 12, 1, 16, 4, 15, 15, 9, 13, 6, 3, 8, 4, 7, 14, 16, 18, 20, 11, 20, 14, 20, 12, 15, 4, 5, 10, 10, 20, 11, 18, 5, 20, 13, 4, 18, 1, 14, 3, 20, 19, 14, 2, 5, 13];
console.log(pickingNumbers(a6)); //15
