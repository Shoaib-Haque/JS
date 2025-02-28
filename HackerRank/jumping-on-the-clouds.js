/* 
There is a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
The player must avoid the thunderheads. 
Determine the minimum number of jumps it will take to jump from the starting position to the last cloud. 
It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

Example
c = [0, 1, 0, 0, 0, 1, 0] 0 -> 2 -> 4 -> 6
return 3
*/

function jumpingOnClouds(c) {
    let steps = -1;
    for (let i = 0; i < c.length;) {
        if(c[i+2] == 0) {
            i += 2;
        } else {
            i++;
        }
        steps++;
    }
    return steps;
}

const c = [0, 1, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(c)); // 3

const c1 = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c1)); // 4

const c2 = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(c2)); // 3
