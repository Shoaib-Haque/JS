/* 
Happy Ladybugs is a board game having the following properties:

The board is represented by a string, l, of length n. The ith character of the string, b[i], denotes the ith cell of the board.
- If b[i] is an underscore (i.e., _), it means the ith cell of the board is empty.
- If b[i] is an uppercase English alphabetic letter (ascii[A-Z]), it means the ith cell contains a ladybug of color b[i].
- String b will not contain any other characters.
A ladybug is happy only when its left or right adjacent cell (i.e., b[i+1]) is occupied by another ladybug having the same color.
In a single move, you can move a ladybug from its current position to any empty cell.
*/

function happyLadybugs(b) {
    let happyBug = [];
    let flag;
    if(b.length == 1 && b[0] != "_") {
        return "NO";
    } else if(b.length == 1 && b[0] == "_") {
        return "YES";
    }
    if(b.includes("_")) {
        for(let i=0; i<b.length; i++) {
            if(b[i] != "_" && !happyBug.includes(b[i])) {
                happyBug.push(b[i]);
                flag = false;
                for(let j=i+1; j<b.length; j++) {
                    if(b[i] == b[j]) {
                        flag = true;
                        break;
                    }
                }
                if(!flag) {
                    return "NO"
                }
            }
        }
        return "YES";
    } else {
        for(let i=0; i<b.length; i++) { 
            if(b[i] != b[i-1] && b[i] != b[i+1]) {
                return "NO";
            }
        }
        return "YES";
    }
}

console.log(happyLadybugs("YYR_B_BR"));
console.log(happyLadybugs("RBY_YBR"));
console.log(happyLadybugs("X_Y__X"));
console.log(happyLadybugs("__"));
console.log(happyLadybugs("B_RRBR"));
console.log(happyLadybugs("_"));
console.log(happyLadybugs("RBRB"));
console.log(happyLadybugs("RRRR"));
console.log(happyLadybugs("BBB"));
console.log(happyLadybugs("BBB_"));
