/* 
A pangram is a string that contains every letter of the alphabet. 
Given a sentence determine whether it is a pangram in the English alphabet. 
Ignore case. Return either pangram or not pangram as appropriate.
*/


function pangrams(s) {
    let char = [];
    for(let c of s) {
        ascii = c.charCodeAt(0);
        if(!char.includes(c) && ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
            char.push(c);
            if(char.length >= 26) return "pangram";
        }
    }
    return "not pangram";
}


console.log(pangrams(""));
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

