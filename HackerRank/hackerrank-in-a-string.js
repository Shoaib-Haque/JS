/* 
We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. 
Remeber that a subsequence maintains the order of characters selected from a sequence.
*/

function hackerrankInString(s) {
    let h = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
    let slice = h.slice(0, 3);
    
    let index = 0;
    let count = 0;
    for(let val of s) {
        if(val == h[index]) {
            index++;
            count++;
            if(count == 10) {
                return "YES";
            }
        } 
        
    }
    return "NO";
}


console.log(hackerrankInString("haacckkerrannkk"));
console.log(hackerrankInString("haacckkerannk"));
console.log(hackerrankInString("hccaakkerrannkk"));
console.log(hackerrankInString("hereiamstackerrank"));
console.log(hackerrankInString("hackerworld"));

console.log(hackerrankInString("hhaacckkekraraannk"));
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
