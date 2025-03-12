/* 
You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. 
Your subjects are in a line, and some of them already have some loaves. 
Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible according to the following rules:

Every time you give a loaf of bread to some person i, 
you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons i+1 or i-1).
After all the bread is distributed, each person must have an even number of loaves.
Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. 
If this is not possible, print NO.

*/

function fairRations(B) {
    let loaf = 0;
    let oddFlag = false;
    let lastOddIndex;
    for(let i=0; i<B.length; i++) {
        if(B[i]%2 ==1 && oddFlag && B[i-1] != undefined && B[i-1]%2 ==1) {
            loaf += 2;
            oddFlag = false;
        } else if(B[i]%2 ==1 && oddFlag) {
            loaf += (i-lastOddIndex)*2;
            oddFlag = false;
        } else if(B[i]%2 ==1) {
            oddFlag = true;
            lastOddIndex = i;
        }
    }
    if(oddFlag) return "NO";
    return loaf;
}

console.log(fairRations([4, 5, 6, 7]));
console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([1, 2]));
console.log(fairRations([1, 5, 3, 7, 3, 3, 7, 9, 9, 9, 7, 9, 3, 5, 7, 5, 1, 7, 5, 9, 5, 3, 7, 3, 7, 9, 5, 5, 9, 7, 5, 7, 8, 7, 9, 9, 3, 5, 9, 1, 7, 1, 1, 3, 3, 3, 7, 3, 5, 7, 3, 5, 7, 7, 5, 1, 5, 7, 1, 1, 9, 3, 9, 3, 9, 7, 9, 1, 7, 5, 7, 7, 1, 7, 1, 1, 3, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 9, 5, 5, 9, 3, 9, 7, 1, 1, 7, 5, 3, 5, 9, 1, 1, 1, 9, 5, 1, 3, 9, 5, 1, 1, 9, 9, 7, 1, 5, 9, 5, 1, 9, 5, 2, 7, 9, 5, 8, 9, 5, 3, 7, 9, 1, 7, 3, 9, 1, 9, 9, 1, 6, 5, 5, 3, 3, 3, 7, 5, 5, 9, 5, 1, 9, 7, 7, 9, 5, 5, 3, 7, 9, 7, 1, 5, 9, 5, 9, 3, 1, 9, 7, 5, 7, 1, 7, 9, 7, 7, 1, 5, 5, 9, 9, 1, 5, 7, 1, 1, 3, 1, 5, 9, 9, 9, 3, 9, 9, 9, 7, 1, 7, 1, 9, 9, 1, 1, 1, 1, 9, 3, 9, 5, 5, 7, 9, 1, 3, 9, 5, 7, 7, 3, 9, 1, 7, 1, 1, 1, 5, 9, 9, 5, 1, 7, 9, 8, 1, 3, 1, 5, 7, 3, 7, 3, 1, 7, 5, 7, 3, 9, 1, 9, 9, 1, 7, 5, 2, 5, 3, 7, 3, 9, 3, 7, 5, 9, 5, 1, 9, 4, 3, 5, 9, 3, 7, 7, 1, 9, 9, 5, 9, 7, 9, 7, 3, 9, 7, 5, 9, 9, 5, 7, 5, 5, 7, 9, 3, 5, 3, 3, 1, 1, 7, 9, 9, 4, 7, 9, 9, 3, 9, 3, 9, 9, 3, 7, 1, 7, 7, 5, 3, 9, 3, 3, 7, 3, 6, 7, 7, 7, 9, 5, 4, 5, 5, 5, 5, 5, 2, 3, 1, 7, 9, 3, 3, 5, 7, 7, 5, 3, 5, 5, 7, 1, 3, 9, 9, 9, 5, 1, 9, 3, 1, 9, 3, 7, 7, 3, 5, 1, 9, 9, 1, 6, 1, 9, 9, 7, 5, 7, 7, 1, 5, 3, 3, 9, 7, 1, 5, 3, 9, 3, 5, 5, 1, 2, 1, 5, 7, 3, 7, 1, 3, 7, 3, 5, 1, 7, 9, 1, 9, 9, 3, 9, 3, 5, 1, 3, 3, 5, 1, 3, 1, 3, 5, 1, 1, 7, 7, 3, 5, 8, 9, 5, 9, 1, 5, 3, 7, 9, 1, 7, 3, 1, 1, 1, 9, 9, 1, 5, 5, 5, 7, 1, 9, 1, 3, 5, 3, 7, 3, 10, 1, 5, 9, 5, 7, 3, 9, 9, 5, 5, 5, 5, 7, 1, 9, 5, 1, 1, 3, 9, 7, 3, 9, 5, 3, 5, 9, 9, 9, 1, 9, 5, 9, 3, 3, 5, 9, 3, 9, 3, 3, 9, 9, 9, 3, 5, 3, 3, 9, 1, 3, 9, 5, 9, 9, 5, 7, 1, 5, 7, 5, 7, 9, 9, 9, 7, 5, 3, 3, 1, 7, 3, 3, 5, 1, 7, 7, 1, 1, 5, 9, 3, 3, 1, 7, 7, 9, 9, 5, 2, 1, 3, 3, 9, 3, 5, 10, 7, 7, 1, 9, 7, 1, 9, 9, 7, 5, 9, 3, 1, 1, 1, 7, 3, 9, 1, 9, 9, 9, 5, 9, 9, 7, 5, 5, 7, 7, 5, 7, 7, 9, 10, 5, 1, 3, 1, 5, 3, 9, 5, 9, 1, 3, 3, 9, 7, 9, 9, 9, 3, 9, 9, 7, 9, 1, 9, 1, 7, 3, 5, 5, 5, 7, 1, 9, 5, 1, 5, 9, 3, 3, 3, 9, 9, 5, 9, 7, 9, 7, 1, 9, 7, 1, 3, 2, 7, 7, 5, 3, 9, 5, 7, 7, 1, 9, 1, 1, 3, 9, 9, 1, 9, 7, 7, 3, 3, 1, 5, 1, 7, 1, 7, 3, 3, 1, 7, 5, 1, 7, 6, 3, 1, 1, 5, 1, 1, 10, 3, 3, 3, 1, 1, 3, 3, 1, 7, 1, 9, 3, 3, 1, 9, 1, 3, 9, 3, 7, 5, 9, 5, 7, 1, 1, 5, 5, 9, 3, 1, 5, 3, 5, 5, 7, 5, 1, 9, 3, 3, 1, 3, 9, 5, 5, 3, 7, 6, 7, 3, 5, 7, 1, 3, 7, 7, 5, 5, 9, 5, 5, 5, 1, 1, 9, 5, 9, 3, 5, 3, 3, 9, 1, 10, 1, 1, 7, 1, 3, 5, 7, 5, 1, 5, 7, 1, 1, 9, 1, 9, 9, 1, 1, 3, 7, 5, 3, 7, 7, 7, 5, 3, 1, 9, 3, 5, 1, 3, 3, 1, 1, 7, 5, 7, 5, 5, 3, 1, 9, 5, 3, 7, 1, 1, 9, 7, 7, 9, 7, 1, 7, 5, 9, 9, 3, 7, 7, 9, 9, 9, 5, 1, 9, 9, 3, 9, 7, 5, 7, 5, 5, 7, 4, 1, 3, 1, 5, 3, 1, 9, 7, 3, 7, 5, 7, 7, 3, 7, 5, 9, 5, 9, 1, 7, 3, 3, 7, 9, 7, 3, 7, 1, 9, 3, 9, 7, 9, 5, 1, 1, 5, 9, 3, 9, 1, 9, 3, 3, 9, 9, 1, 5, 7, 1, 7, 7, 1, 5, 5, 8, 5, 1, 7, 9, 7, 5, 1, 7, 5, 1, 5, 9, 9, 5, 7, 9, 1, 1, 9, 7, 1, 7, 9, 1, 9, 7, 1, 2, 7, 1]));
