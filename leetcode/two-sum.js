/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

Runtime 54 ms
Beats 16.56%
*/

var twoSum = function(nums, target) {
    // nums = nums.sort((a,b) => a-b);

    // let mapped_nums = nums.filter((val) => {
    //     if(val <= target) {
    //         return val;
    //     }
    // });

    // let mapped_nums = [];
    // for (let val of nums) {
    //     if (val <= target) {
    //         mapped_nums.push(val);
    //     } else {
    //         break;
    //     }
    // }
    
    let left, leftIndex, is_exist;
    for(let i=0; i<nums.length; i++) {
        left = target-nums[i];
        is_exist = nums.slice(i+1).includes(left);
        
        if(is_exist) {
            leftIndex = nums.slice(i+1).findIndex(val => val === left);
            // console.log(i, nums.slice(i+1), leftIndex, left);
            return [i, leftIndex+i+1];
        }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));


