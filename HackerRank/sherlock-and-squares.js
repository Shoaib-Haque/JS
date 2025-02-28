/* 
Watson likes to challenge Sherlock's math ability. 
He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. 
Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.
*/


function squares(a, b) {
    let c = 0;
    for (let i = a; i <= b; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            c++;
        }
    }
    return c++;
}

console.log(squares(24, 49));
console.log(squares(3, 9));
console.log(squares(17, 24));

