/* 
Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.
*/

function lonelyinteger(a) {
    a = a.sort((a, b) => a-b);
    for(let i=0; i<a.length; i+=2) {
        if(a[i] != a[i+1]) {
            return a[i];
        }
    }
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyinteger([1]));
console.log(lonelyinteger([1, 1, 2]));
console.log(lonelyinteger([0, 0, 1, 2, 1]));

