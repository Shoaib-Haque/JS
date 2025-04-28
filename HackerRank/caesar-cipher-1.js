/* 
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
*/

function caesarCipher(s, k) {
    let extra;
    let res = "";
    let char;
    let ascii;

    for(let i=0; i<s.length; i++) {
        char = s[i];
        ascii = char.charCodeAt(0);
        if(ascii >= 65 && ascii <= 90) {
            if(ascii+k <= 90) {
                res += String.fromCharCode(ascii+k);
            } else {
                extra = ((ascii+k)-90)%26;
                res += extra == 0 ? String.fromCharCode(90) : String.fromCharCode(extra+64);
            }
        } else if(ascii >= 97 && ascii <= 122) {
            if(ascii+k <= 122) {
                res += String.fromCharCode(ascii+k);
            } else {
                extra = ((ascii+k)-122)%26;
                res += extra == 0 ? String.fromCharCode(122) : String.fromCharCode(extra+96) ;
            }
        } else {
            res += char;
        }
    }
    return res;
}
                          
console.log(caesarCipher("159357lcfd", 98));

