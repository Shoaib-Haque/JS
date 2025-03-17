/* 
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. 
If the final string is empty, return Empty String
*/

function superReducedString(s) {
    for(let i=0; i<s.length;) {
        if(s[i] == s[i+1]) {
            s = s.substr(0, i) + s.substr(i+2);
            if(s.length == 0) {
                return "Empty String";
            }
            if(i!=0) {
                i--;
            }
        } else {
            i++;
        }
    }
    return s;
}


console.log(superReducedString("aab"));
console.log(superReducedString("aaabccddd"));
console.log(superReducedString("aa"));
console.log(superReducedString("baab"));

