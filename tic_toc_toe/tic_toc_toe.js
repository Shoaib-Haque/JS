let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
let gameOn = true;
const Player1Sign = "*";
const Player2Sign = "0";
let whichPlayer = "Player1";
let row = 0;
let column = 0;
const blocks = document.getElementsByClassName("block");
console.log(blocks);

const heading = document.getElementById("heading");


const checkSign = (sign) => {
    if(board[row][0] == sign && board[row][1] == sign && board[row][2] == sign) {
        blocks[row*3+0].style.backgroundColor = "red";
        blocks[row*3+1].style.backgroundColor = "red";
        blocks[row*3+2].style.backgroundColor = "red";
        return true;
    } else if(board[0][column] == sign && board[1][column] == sign && board[2][column] == sign) {
        blocks[column*1+0].style.backgroundColor = "red";
        blocks[column*1+3].style.backgroundColor = "red";
        blocks[column*1+6].style.backgroundColor = "red";
        return true;
    } else if((row === column) && (board[0][0] == sign && board[1][1] == sign && board[2][2] == sign)) {
        blocks[0].style.backgroundColor = "red";
        blocks[4].style.backgroundColor = "red";
        blocks[8].style.backgroundColor = "red";
        return true;
    } else if((Number(row)+Number(column) == 2) && (board[0][2] == sign && board[1][1] == sign && board[2][0] == sign)) {
        blocks[2].style.backgroundColor = "red";
        blocks[4].style.backgroundColor = "red";
        blocks[6].style.backgroundColor = "red";
        return true;
    }
};

const checkResult = () => {
    if(whichPlayer == "Player1") {
        if(checkSign(Player1Sign)) {
            gameOn = false;
        } else {
            whichPlayer = "Player2";
        }
    } else {
        if(checkSign(Player2Sign)) {
            gameOn = false;
        } else {
            whichPlayer = "Player1";
        }
    }
    if(gameOn) {
        heading.innerText = `${whichPlayer}`;
    } else {
        heading.innerText = `${whichPlayer} Wins!`;
    }
}

const takeShot = (e) => {
    if(gameOn) {
        row = e.target.getAttribute("row");
        column = e.target.getAttribute("column");
        // e.target.style.backgroundColor = "red";
        if(e.target.innerText == "") {
            if(whichPlayer == "Player1") {
                e.target.innerText = Player1Sign;
                board[row][column] = Player1Sign;
            } else {
                e.target.innerText = Player2Sign;
                board[row][column] = Player2Sign;
            }
        }
        checkResult();
    }
}

for(let block of blocks) {
    block.addEventListener("click", takeShot);
}