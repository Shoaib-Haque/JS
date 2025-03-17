/* 
Louise joined a social networking site to stay in touch with her friends. 
The signup page required her to input a name and a password. 
However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length  in the password field but wasn't sure if it was strong. 
Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:
*/

function minimumNumber(n, password) {
    let upperFlag = false;
    let lowerFlag = false;
    let digitFlag = false;
    let specialFlag = false;
    let specialChars = "!@#$%^&*()-+";
    let ascii
    for(let char of password) {
        ascii = char.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            upperFlag = true;
        } else if (ascii >= 97 && ascii <= 122) {
            lowerFlag = true;
        } else if (ascii >= 48 && ascii <= 57) {
            digitFlag = true;
        } else if (specialChars.includes(char)) {
            specialFlag = true;
        }
    }

    let extra = 0;
    if(!upperFlag) {
        extra++;
    }
    if(!lowerFlag) {
        extra++;
    }
    if(!digitFlag) {
        extra++;
    }
    if(!specialFlag) {
        extra++;
    }

    if(extra+n >= 6) {
        return extra;
    } else {
        return extra+(6-(n+extra));
    }
}

console.log(minimumNumber(5, "2bbbb"));
console.log(minimumNumber(5, "2bb#b"));
console.log(minimumNumber(3, "Ab1"));
console.log(minimumNumber(11, "#HackerRank"));
