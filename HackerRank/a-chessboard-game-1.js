/* 
Two players are playing a game on a 15*15 chessboard. The rules of the game are as follows:

The game starts with a single coin located at some (x, y) coordinates. The coordinates of the upper left cell are (1, 1), and of the lower right cell are (15, 15).

In each move, a player must move the coin from cell (x, y) to one of the following locations:
1. (x-2, y+1)
1. (x-2, y-1)
1. (x+1, y-2)
1. (x-1, y-2)

Note: The coin must remain inside the confines of the board.

Beginning with player 1, the players alternate turns. The first player who is unable to make a move loses the game.
*/


function chessboardGame(x, y) {
    let win = "First";
    let a, b;
    let canMove = false;
    let i=1;
    while(true) {
        if(x-(2*i) >= 1 && y+(1*i) <= 15) {
            canMove = true;
            a = x-(2*i);
            b = y+(1*i);
            console.log(1, win, "can move");
            
            if((a-(2*i) < 1 || b+(1*i) > 15) && (a-(2*i) < 1 || b-(1*i) < 1) && (a+(1*i) > 15 || b-(2*i) < 1) && (a-(1*i) < 1 || b-(2*i) < 1)) {
                return win;
            }
        } 
        if(x-(2*i) >= 1 && y-(1*i) >= 1) {
            canMove = true;
            a = x-(2*i);
            b = y-(1*i);
            console.log(2, win, "can move");

            if((a-(2*i) < 1 || b+(1*i) > 15) && (a-(2*i) < 1 || b-(1*i) < 1) && (a+(1*i) > 15 || b-(2*i) < 1) && (a-(1*i) < 1 || b-(2*i) < 1)) {
                return win;
            }
        } 
        if(x+(1*i) <= 15 && y-(2*i) >= 1) {
            canMove = true;
            a = x+(1*i);
            b = y-(2*i);
            console.log(3, win, "can move");

            if((a-(2*i) < 1 || b+(1*i) > 15) && (a-(2*i) < 1 || b-(1*i) < 1) && (a+(1*i) > 15 || b-(2*i) < 1) && (a-(1*i) < 1 || b-(2*i) < 1)) {
                return win;
            }
        }  
        if(x-(1*i) >= 1 && y-(2*i) >= 1) {
            canMove = true;
            a = x-(1*i);
            b = y-(2*i);
            console.log(4, win, "can move");

            if((a-(2*i) < 1 || b+(1*i) > 15) && (a-(2*i) < 1 || b-(1*i) < 1) && (a+(1*i) > 15 || b-(2*i) < 1) && (a-(1*i) < 1 || b-(2*i) < 1)) {
                return win;
            }
        }
        win = win == "First" ? "Second" : "First";
        if(!canMove) {
            return win;
        }
        canMove = false;
        i++;
    }
}

// console.log(chessboardGame(5, 2));
console.log(chessboardGame(5, 3));
// console.log(chessboardGame(8, 8));
// console.log(chessboardGame(7, 3));
// console.log(chessboardGame(8, 12));
// console.log(chessboardGame(9, 7));