/* 
An integer d is a divisor of an integer n if the remainder of n%d=2.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Example
n = 123
Check whether 1, 2 and 4 are divisors of 123. All 3 numbers divide evenly into 124 so return 4.

111
Check whether 1, 1, and 1 are divisors of 111. All 3 numbers divide evenly into 111 so return .

10
Check whether 1 and 0 are divisors of 1. 1 is, but 0 is not. Return 1.
*/


function findDigits(n) {
    let d = n;
    let l = n%10;
    let c= 0;
    while(d>0) {
        if(n%l == 0) c++;
        d = parseInt(d/10);
        l = d%10;
    }
    return c;
}

console.log(findDigits(124));
console.log(findDigits(111));
console.log(findDigits(10));
console.log(findDigits(12));
console.log(findDigits(1012));
