/* 
You have two strings of lowercase English letters. You can perform two types of operations on the first string:

Append a lowercase English letter to the end of the string.
Delete the last character of the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. 
If it's possible, print Yes. Otherwise, print No.

Sample Input
s = hackerhappy
t = hackerrank
k = 9

Sample Output
Yes
*/

function appendAndDelete(s, t, k) {
    const sLength = s.length;
    const tLength = t.length;
    let [large,small] = sLength >= tLength ? [s,t] : [t,s];
    let cnt = 0;
    if(sLength != tLength) {
        if(t == large) {
            cnt += tLength - sLength;
        } else if(s == large) {
            cnt += sLength - tLength;
        }
        for(let i in small) {
            if(small[i] != large[i]) {
                cnt += (small.length-i)*2;
                break;
            }
        }
    } else {
        cnt += sLength*2;
    }

    console.log('s', s, 'k', k, 'cnt', cnt);
    
    return cnt == k ? "Yes" : "No";
}

const s0 = "hackerhappy"; // s large
const t0 = "hackerrank";
const k0 = 9; // Yes
console.log('Yes', appendAndDelete(s0, t0, k0));

const s1 = "aba"; // Equal
const t1 = "aba";
const k1 = 7; // Yes
console.log('Yes', appendAndDelete(s1, t1, k1));

const s2 = "aaaaaaaaaa"; // s large
const t2 = "aaaaa";
const k2 = 7; // Yes
console.log('Yes', appendAndDelete(s2, t2, k2));

const s3 = "zzzzz";
const t3 = "zzzzzzz"; // t large
const k3 = 4; // Yes
console.log('Yes', appendAndDelete(s3, t3, k3));

const s4 = "qwerasdf"; // Equal
const t4 = "qwerbsdf";
const k4 = 6; // No
console.log('No', appendAndDelete(s4, t4, k4));

const s5 = "y";
const t5 = "yu"; // t large
const k5 = 2; // No
console.log('No', appendAndDelete(s5, t5, k5));

const s6 = "qwerty"; // Equal
const t6 = "zxcvbn";
const k6 = 100; // Yes
console.log('Yes', appendAndDelete(s6, t6, k6));

const s7 = "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const t7 = "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const k7 = 20; // Yes
console.log('Yes', appendAndDelete(s7, t7, k7));

const s8 = "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const t8 = "bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const k8 = 100; // No
console.log('No', appendAndDelete(s8, t8, k8));

const s9 = "abcdef"; // Equal
const t9 = "fedcba";
const k9 = 15; // Yes
console.log('Yes', appendAndDelete(s9, t9, k9));

const s10 = "abcd";
const t10 = "abcdert"; // t large
const k10 = 10; // No
console.log('No', appendAndDelete(s10, t10, k10));

const s11 = "uoiauwrebgiwrhgiuawheirhwebvjforidkslweufgrhvjqasw";
const t11 = "vgftrheydkoslwezxcvdsqjkfhrydjwvogfheksockelsnbkeq";
const k11 = 100; // Yes
console.log('Yes', appendAndDelete(s11, t11, k11));

const s12 = "aaa"; // s large
const t12 = "a";
const k12 = 5; // Yes
console.log('Yes', appendAndDelete(s12, t12, k12));

const s13 = "ashley"; // s large
const t13 = "ash";
const k13 = 2; // No
console.log('No', appendAndDelete(s13, t13, k13));
