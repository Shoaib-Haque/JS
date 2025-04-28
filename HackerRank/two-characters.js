/* 
Given a string, remove characters until the string is made up of any two alternating characters. 
When you choose a character to remove, all instances of that character must be removed. 
Determine the longest string possible that contains just two alternating letters.

Example
s = 'abaacdabd'
Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. 
Removing either b or d at any point would not result in a valid string. Return 4.
*/


function alternate(s) {
    let chars = [];
    let charsCount = [];
    let max = 0;
    for(let i = 0; i < s.length;) {
        if(i >= 0 && s[i] == s[i+1]) {
            s = s.split(s[i]).join("");
            i = 0;
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if(!chars.includes(s[i])) {
            chars.push(s[i]);
            charsCount.push(s.split(s[i]).length - 1);
        }
    }

    for(let i=0; i<chars.length-1; i++) {
        for (let j = i+1; j < chars.length; j++) {
            let allowedChars = new RegExp(`[^${chars[i]}${chars[j]}]`, "g");
            let result = s.replace(allowedChars, "");
            flag = true;
            for(let k = 0; k < result.length-1; k++) {
                if(result[k] == result[k+1]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                max = result.length > max ? result.length : max;
            }
            
        }
    }
    
    return max;
}

console.log(alternate("abaacdabd"));
console.log(alternate("beabeefeab"));
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab"));
console.log(alternate("asvkugfiugsalddlasguifgukvsa"));
console.log(alternate("uyetuppelecblwipdsqabzsvyfaezeqhpnalahnpkdbhzjglcuqfjnzpmbwprelbayyzovkhacgrglrdpmvaexkgertilnfooeazvulykxypsxicofnbyivkthovpjzhpohdhuebazlukfhaavfsssuupbyjqdxwwqlicbjirirspqhxomjdzswtsogugmbnslcalcfaxqmionsxdgpkotffycphsewyqvhqcwlufekxwoiudxjixchfqlavjwhaennkmfsdhigyeifnoskjbzgzggsmshdhzagpznkbahixqgrdnmlzogprctjggsujmqzqknvcuvdinesbwpirfasnvfjqceyrkknyvdritcfyowsgfrevzon"));
