/* 
Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
If no non-degenerate triangle exists, return [-1].
*/


function maximumPerimeterTriangle(sticks) {
    sticks = sticks.sort((a, b) => b-a);
    for(let i=0; i<sticks.length-2; i++) {
        if(sticks[i] < sticks[i+1] + sticks[i+2]) {
            return [sticks[i+2], sticks[i+1], sticks[i] ];
        }
    }
    return [-1];
}


console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]));
console.log(maximumPerimeterTriangle([1, 1, 1, 3, 3]));
console.log(maximumPerimeterTriangle([1, 2, 3]));
console.log(maximumPerimeterTriangle([1, 1, 1, 2, 3, 5]));
console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));

