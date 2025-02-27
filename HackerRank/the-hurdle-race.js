/* 
A video player plays a game in which the character competes in a hurdle race. 
Hurdles are of varying heights, and the characters have a maximum height they can jump. 
There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. 
How many doses of the potion must the character take to be able to jump all of the hurdles. 
If the character can already clear all of the hurdles, return 0.

Example
height = [1, 2, 3, 3, 2]
k = 1
return 2 (3-1)

height = [1, 6, 3, 5, 2]
k = 4
return 2 (6-4) 
*/


function hurdleRace(k, height) {
    height = height.sort((a, b) => a-b);
    const maxHeight = height[height.length-1];
    if(maxHeight > k) return maxHeight-k;
    return 0;
}

const height = [1, 2, 3, 3, 2];
const k = 1;
console.log(hurdleRace(k, height));

const height1 = [1, 6, 3, 5, 2];
const k1 = 4;
console.log(hurdleRace(k1, height1));

const height2 = [2, 5, 4, 5, 2];
const k2 = 7;
console.log(hurdleRace(k2, height2));


