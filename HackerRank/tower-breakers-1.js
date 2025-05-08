/* 
Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:

Initially there are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and  evenly divides x.
If the current player is unable to make a move, they lose the game.
Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.
*/

function towerBreakers(n, m) {
    let player = 1;


}

console.log(towerBreakers(2, 6)); // 2
console.log(towerBreakers(2, 2)); // 2
console.log(towerBreakers(1, 4)); // 1
console.log(towerBreakers(100000, 1)); // 2
console.log(towerBreakers(100001, 1)); // 2
console.log(towerBreakers(374625, 796723)); // 1
console.log(towerBreakers(950929, 183477)); // 1
console.log(towerBreakers(732159, 779867)); // 1
console.log(towerBreakers(598794, 596985)); // 2

/* 
100000 1
100001 1
374625 796723
950929 183477
732159 779867
598794 596985
*/

