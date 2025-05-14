/* 
You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an n*n chessboard. The chess board's rows are numbered from 1 to n, going from bottom to top. Its columns are numbered from 1 to n, going from left to right. 
Each square is referenced by a tuple, (r, c), describing the row, r, and column, c, where the square is located.

The queen is standing at position (rq, cq). In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals).

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at (rq, cq).
*/


function queensAttack(n, k, r_q, c_q, obstacles) {
    let leftObstacle, rightObstacle, upObstacle, downObstacle;
    let leftDownObstacle = [];
    let rightDownObstacle = [];
    let leftUpObstacle = [];
    let rightUpObstacle = [];

    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        if(obstacle[0] == r_q) {
            if(obstacle[1] < c_q && (leftObstacle == undefined || obstacle[1] > leftObstacle)) {
                leftObstacle = obstacle[1];
            } else if(obstacle[1] > c_q && (rightObstacle == undefined || obstacle[1] < rightObstacle)) {
                rightObstacle = obstacle[1];
            }
        }
        if(obstacle[1] == c_q) {
            if(obstacle[0] > r_q && (upObstacle == undefined || obstacle[0] < upObstacle)) {
                upObstacle = obstacle[0];
            } else if(obstacle[0] < r_q && (downObstacle == undefined || obstacle[0] > downObstacle)) {
                downObstacle = obstacle[0];
            }
        }

        if(obstacle[0] < r_q && obstacle[1] < c_q && (r_q-obstacle[0] == c_q-obstacle[1])) {
            if(leftDownObstacle.length == 0 || r_q-obstacle[0] < r_q-leftDownObstacle[0]) {
                leftDownObstacle = [];
                leftDownObstacle.push(obstacle[0]);
                leftDownObstacle.push(obstacle[1]);
            }
        }
        if(obstacle[0] < r_q && obstacle[1] > c_q && (r_q-obstacle[0] == obstacle[1]-c_q)) {
            if(rightDownObstacle.length == 0 || r_q-obstacle[0] < r_q-rightDownObstacle[0]) {
                rightDownObstacle = [];
                rightDownObstacle.push(obstacle[0]);
                rightDownObstacle.push(obstacle[1]);
            }
        }
        if(obstacle[0] > r_q && obstacle[1] < c_q && (obstacle[0]-r_q == c_q-obstacle[1])) {
            if(leftUpObstacle.length == 0 || obstacle[0]-r_q < leftUpObstacle[0]-r_q) {
                leftUpObstacle = [];
                leftUpObstacle.push(obstacle[0]);
                leftUpObstacle.push(obstacle[1]);
            }
        }
        if(obstacle[0] > r_q && obstacle[1] > c_q && (obstacle[0]-r_q == obstacle[1]-c_q)) {
            if(rightUpObstacle.length == 0 || obstacle[0]-r_q < rightUpObstacle[0]-r_q) {
                rightUpObstacle = [];
                rightUpObstacle.push(obstacle[0]);
                rightUpObstacle.push(obstacle[1]);
            }
        }
    }


    let left = c_q-1;
    let right = n-c_q;
    let up = n-r_q;
    let down = r_q-1;
    let left_down = left < down ? left : down;
    let right_down = right < down ? right : down;
    let left_up = left < up ? left : up;
    let right_up = right < up ? right : up;
    
    if(leftObstacle != undefined) {
        left = c_q-1-leftObstacle;
    }
    if(rightObstacle != undefined) {
        right = rightObstacle-1-c_q;
    }
    if(upObstacle != undefined) {
        up = upObstacle-1-r_q;
    }
    if(downObstacle != undefined) {
        down = r_q-1-downObstacle;
    }
    if(leftDownObstacle.length != 0) {
        left_down = r_q-leftDownObstacle[0]-1;
    }
    if(rightDownObstacle.length != 0) {
        right_down = r_q-rightDownObstacle[0]-1;
    }
    if(leftUpObstacle.length != 0) {
        left_up = leftUpObstacle[0]-r_q-1;
    }
    if(rightUpObstacle.length != 0) {
        right_up = rightUpObstacle[0]-r_q-1;
    }

    // console.log('left', left, 'right', right, 'up',  up, 'down',  down);
    // console.log("leftObstacle", leftObstacle, "rightObstacle", rightObstacle, "upObstacle", upObstacle, "downObstacle", downObstacle);


    // console.log('left_down', left_down, 'right_down', right_down, 'left_up', left_up, 'right_up', right_up,);
    // console.log("leftDownObstacle", leftDownObstacle, "rightDownObstacle", rightDownObstacle, "leftUpObstacle", leftUpObstacle, "rightUpObstacle", rightUpObstacle);

    return left+right+up+down+left_down+right_down+left_up+right_up;
}

console.log(queensAttack(4, 0, 4, 4, []));
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
// console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3], [2, 1], [3, 2], [5, 4]]));
console.log(queensAttack(1, 0, 1, 1, []));
console.log(queensAttack(88587, 9, 20001, 20003, [[20001, 20002],[20001, 20004],[20000, 20003],[20002, 20003], [20000, 20002], [20000, 20004], [20002, 20002], [20002, 20004],[564, 323]]));

console.log(queensAttack(100, 100, 48, 81, [[54, 87], [64, 97], [42, 75], [32, 65], [42, 87], [32, 97], [54, 75], [64, 65], [48, 87], [48, 75], [54, 81], [42, 81], [45, 17], [14, 24], [35, 15], [95, 64], [63, 87], [25, 72], [71, 38], [96, 97], [16, 30], [60, 34], [31, 67], [26, 82], [20, 93], [81, 38], [51, 94], [75, 41], [79, 84], [79, 65], [76, 80], [52, 87], [81, 54], [89, 52], [20, 31], [10, 41], [32, 73], [83, 98], [87, 61], [82, 52], [80, 64], [82, 46], [49, 21], [73, 86], [37, 70], [43, 12], [94, 28], [10, 93], [52, 25], [50, 61], [52, 68], [52, 23], [60, 91], [79, 17], [93, 82], [12, 18], [75, 64], [69, 69], [94, 74], [61, 61], [46, 57], [67, 45], [96, 64], [83, 89], [58, 87], [76, 53], [79, 21], [94, 70], [16, 10], [50, 82], [92, 20], [40, 51], [49, 28], [51, 82], [35, 16], [15, 86], [78, 89], [41, 98], [70, 46], [79, 79], [24, 40], [91, 13], [59, 73], [35, 32], [40, 31], [14, 31], [71, 35], [96, 18], [27, 39], [28, 38], [41, 36], [31, 63], [52, 48], [81, 25], [49, 90], [32, 65], [25, 45], [63, 94], [89, 50], [43, 41]]));

