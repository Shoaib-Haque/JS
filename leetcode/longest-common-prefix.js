/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Runtime 0 ms
Beats 100.00%
*/

var longestCommonPrefix = function(strs) {
    let output = "";
    let j, temp;
    for(let item of strs) {
        console.log("item", item);
        
        if(item == "") {
            return "";
        }
        if(output == "") {
            output = item;
        } else if(output != item) {
            j = 0;
            temp = "";
            while(j<item.length && j<output.length) {
                if(output[j] != item[j]) {
                    if(j == 0) {
                        return temp;
                    }
                    break;
                }
                temp += item[j];
                j++;
            }
            output = temp;
        }
    }
    return output;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["","b"]));
console.log(longestCommonPrefix(["ab","a"]));
console.log(longestCommonPrefix(["abab","aba",""]));


