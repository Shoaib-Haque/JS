/* 
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

For example, if the number of growth cycles is 5, the calculations are as follows:

Period  Height
0          1 (initial)
1          2 (Double)
2          3 (increase 1meter)
3          6 (Double)
4          7 (increase 1meter)
5          14 (Double)
*/

function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++) {
        if(i%2 == 0) {
            height++;
        } else {
            height *= 2;
        }
    }
    return height;
}

console.log(utopianTree(0)); // 1
console.log(utopianTree(1)); // 2
console.log(utopianTree(4)); // 7
console.log(utopianTree(5)); // 14

