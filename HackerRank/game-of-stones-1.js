/* 
Two players called  and  are playing a game with a starting number of stones. Player  always plays first, and the two players move in alternating turns. The game's rules are as follows:

In a single move, a player can remove either , , or  stones from the game board.
If a player is unable to make a move, that player loses the game.
Given the starting number of stones, find and print the name of the winner.  is named First and  is named Second. Each player plays optimally, meaning they will not make a move that causes them to lose the game if a winning move exists.
*/

function gameOfStones(n) {
    return n%7 < 2 ? "Second" : "First";
}

for(i=1; i<=30; i++) {
    console.log(i, gameOfStones(i));
}

// console.log(10, gameOfStones(10));
// console.log(55, gameOfStones(15));
// console.log(11, gameOfStones(11));
// console.log(34, gameOfStones(34));
// console.log(92, gameOfStones(92));

// console.log(gameOfStones(18));
// first = 18 =  16
// second = 16 = 14, 13, 11
// first = 18 - 5 = 13
// first = 18 - 5 = 13

/* 
1  Second
2  First
3  First
4  First
5  First
6  First
7  Second
8  Second
9  First
10 First
11 First
12 First
13 First
14 Second
15 Second
16 First
17 First
18 First
19 First
20 First
21 Second
22 Second
23 First
24 First
25 First
26 First
27 First
28 Second
29 Second
30 First
*/