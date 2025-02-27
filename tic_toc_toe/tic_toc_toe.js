
const Player1Sign = "*";
const Player2Sign = "0";
const blocks = document.getElementsByClassName("block");
const heading = document.getElementById("heading");
const resetBtn = document.querySelector("button");

let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
let gameOn = true;
let whichPlayer = "Player1";
let row = 0;
let column = 0;
let clicks = 0;

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
    if(gameOn && clicks == 9) {
        heading.innerText = `No winner!`;
    } else if(gameOn) {
        heading.innerText = `${whichPlayer}`;
    } else {
        heading.innerText = `${whichPlayer} Wins!`;
    }
}

const takeShot = (e) => {
    if(gameOn && e.target.innerText == "") {
        row = e.target.getAttribute("row");
        column = e.target.getAttribute("column");
        if(whichPlayer == "Player1") {
            e.target.innerText = Player1Sign;
            board[row][column] = Player1Sign;
        } else {
            e.target.innerText = Player2Sign;
            board[row][column] = Player2Sign;
        }
        clicks++;
        checkResult();
    }
}

const reset = () => {
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            board[r][c] = "-";
        })
    });
    for(let block of blocks) {
        block.innerHTML = "";
    }
    whichPlayer = "Player1";
    heading.innerText = `${whichPlayer}`;
    
}

for(let block of blocks) {
    block.addEventListener("click", takeShot);
}

resetBtn.addEventListener("click", reset);