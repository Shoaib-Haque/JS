/* 
Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. If Marc has eaten j cupcakes so far, after eating a cupcake with c calories he must walk at least 2^j * c miles to maintain his weight.

Example
calorie = [5, 10, 7]
If he eats the cupcakes in the order shown, the miles he will need to walk are (2^0*5)+(2^1*10)+(2^2*7) = 53. This is not the minimum, though, so we need to test other orders of consumption. 
In this case, our minimum miles is calculated as (2^0*10)+(2^0*7)+(2^0*5) = 44.

Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.

Function Description
Complete the marcsCakewalk function in the editor below.

marcsCakewalk has the following parameter(s):
int calorie[n]: the calorie counts for each cupcake

Returns
long: the minimum miles necessary
*/

function marcsCakewalk(calorie) {
    let long = 0;
    calorie = calorie.sort((a, b) => b-a);
    
    for(let j=0; j<calorie.length; j++) {
        long += (2**j)*calorie[j];
    }
    return long;
}

console.log(marcsCakewalk([5, 10, 7])); // 44
console.log(marcsCakewalk([1, 3, 2])); // 11
console.log(marcsCakewalk([7, 4, 9, 6])); // 79
