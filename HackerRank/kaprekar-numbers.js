/* 
A modified Kaprekar number is a positive whole number with a special property. 
If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

Consider a positive whole number n with d digits. 
We square n to arrive at a number that is either 2*d digits long or (2*d)-1 digits long. 
Split the string representation of the square into two parts, l and r. 
The right hand part, r must be d digits long. The left is the remaining substring. 
Convert those two substrings back to integers, add them and see if you get n.

*/


function kaprekarNumbers(p, q) {
    let s;
    let sLength;
    let l;
    let r;
    let sum;
    let flag = false;
    let result = [];
    for(let i=p; i<=q; i++) {
        s = i*i;
        s = s.toString();
        sLength = s.length;
        r = s.substring(parseInt(sLength/2));
        l = s.substring(0, parseInt(sLength/2));
        l = l ? l : 0;
        sum = parseInt(l)+parseInt(r);
        // console.log(s, sLength, ", r ", r, ", l ", l, ' sum ', sum);
        if(sum == i) {
            flag = true;
            result.push(i);
        }
    }
    if(flag) {
        console.log(result.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}

kaprekarNumbers(1, 100);
kaprekarNumbers(10, 20);
