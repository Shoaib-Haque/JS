/* 
A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. 
The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds,  and an energy level e = 100. 
The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i+k)%k]. 
If it lands on a thundercloud, c(i) = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud 0.

Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.

Example. 
c = [0, 0, 1, 0]
k = 2
final e = 96

c = [0, 0, 1, 0, 0, 1, 1, 0]
k = 2
final e = 92
*/


function jumpingOnClouds(c, k) {
    let e = 100;
    for(let i=0; ;) {
        if(i+k < c.length) {
            i+=k
        } else {
            i = (i+k)-c.length;
        }
        e--;
        if(c[i] == 1) {
            e -= 2;
        }
        
        if(i == 0) {
            return e;
        }
    }
}

const c = [0, 0, 1, 0];
const k = 2;
console.log(jumpingOnClouds(c, k));

const c1 = [0, 0, 1, 0, 0, 1, 1, 0];
const k1 = 2;
console.log(jumpingOnClouds(c1, k1));

          //0  1  2  3  4  5  6  7  8  9
const c2 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]; // total 10
//path(i) 0 -> 3 -> 6 -> 9(last) -> 2 -> 5 -> 8 -> 1 -> 4 -> 7 -> 0
//value   1 -> 0 -> 0 -> 0(last) -> 1 -> 1 -> 0 -> 1 -> 1 -> 0 -> 1
//e     100 ->99 ->98 ->97      -> 94 ->91 ->90 ->87 ->84 ->83 ->80 
const k2 = 3;
console.log(jumpingOnClouds(c2, k2)); // 80
