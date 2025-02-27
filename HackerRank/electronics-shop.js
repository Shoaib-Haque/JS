/* 
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
Given price lists for keyboards and USB drives and a budget, find the cost to buy them. 
If it is not possible to buy both items, return -1.

Example
b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]
return 50+8 = 58

Sample Input
b = 5
keyboards = [4]
drives = [5]
Sample Output
-1
*/

function getMoneySpent(keyboards, drives, b) {
    keyboards = keyboards.sort((a, b) => a-b);
    drives = drives.sort((a, b) => a-b);
    if(keyboards[0]+drives[0] > b) return -1;
    let max = 0;
    
    for(let i=keyboards.length-1; i>=0; i--) {
        if(keyboards[i] >= b) {continue;}
        for(let j=drives.length-1; j>=0; j--) {
            if(drives[j] >= b) {continue;}
            if(keyboards[i]+drives[j]>max && keyboards[i]+drives[j]<=b) { 
                max = keyboards[i]+drives[j];
            }
        }
    }
    return max;
}


const b = 60;
const keyboards = [40, 50, 60];
const  drives = [5, 8, 12];
console.log(getMoneySpent(keyboards, drives, b));

const b1 = 5;
const keyboards1 = [4];
const  drives1 = [5];
console.log(getMoneySpent(keyboards1, drives1, b1));

const b2 = 10;
const keyboards2 = [3, 1];
const  drives2 = [5, 2, 8];
console.log(getMoneySpent(keyboards2, drives2, b2));


