/* 
You are choreographing a circus show with various animals. For one act, 
you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
If it is possible, return YES, otherwise return NO.

Sample Input
0 3 4 2

Sample Output 
YES

Sample Input 1
0 2 5 3
Sample Output 1
NO

Explanation 1
The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). 
Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, 
the first kangaroo will never be able to catch up. Thus, we print NO.
*/

function kangaroo(x1, v1, x2, v2) {
    if((x1 >= x2 && v1 > v2) || (x2 >= x1 && v2 > v1) || (x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) return "NO";
    return "YES";
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;
console.log(kangaroo(x1, v1, x2, v2));

const x3 = 0;
const v3 = 2;
const x4 = 5;
const v4 = 3;
console.log(kangaroo(x3, v3, x4, v4));

const x5 = 21;
const v5 = 6;
const x6 = 47;
const v6 = 3;
console.log(kangaroo(x5, v5, x6, v6));
