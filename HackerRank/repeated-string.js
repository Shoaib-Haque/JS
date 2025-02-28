/* 
There is a string, s, of lowercase English letters that is repeated infinitely many times. 
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

s = 'abcac'
n = 10;
The substring we consider is 'abcacabcac', the first 10 characters of the infinite string. 
There are 4 occurrences of a in the substring.
*/


function repeatedString(s, n) {
    const sLength = s.length;
    let c = 0;
    if(n <= sLength) {
        s = s.substr(0, n);
        for(let val of s) {
            if(val == 'a') c++;
        }
    } else {
        for(let val of s) {
            if(val == 'a') c++;
        }
        c *= parseInt(n/sLength);
        s = s.substr(0, n%sLength);
        for(let val of s) {
            if(val == 'a') c++;
        }
    }

    return c;
}


const s = "abcac";
const n = 10;
console.log(repeatedString(s, n)); // 4

const s1 = "aba"; // aba aba aba a
const n1 = 10;
console.log(repeatedString(s1, n1)); // 7

const s2 = "a";
const n2 = 1000000000000;
console.log(repeatedString(s2, n2)); // 1000000000000

const s3 = "abcac";
const n3 = 4; // 5
console.log(repeatedString(s3, n3)); // 2

