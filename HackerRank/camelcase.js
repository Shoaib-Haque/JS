/* 
There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given s, determine the number of words in s.

*/


function camelcase(s) {
    let count = 1;
    for(let val of s) {
        if (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
            count++;   
        }
    }
    return count;
}

console.log(camelcase("oneTwoThree"));
console.log(camelcase("saveChangesInTheEditor"));
