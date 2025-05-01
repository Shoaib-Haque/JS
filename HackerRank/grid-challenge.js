/* 
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

Example
grid = ['abc', 'ade', 'efg']

The grid is illustrated below.
a b c
a d e
e f g

The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different
*/
function gridChallenge(grid) {
    for(let i=0; i<grid.length; i++) {
        let item = grid[i];
        item = item.split("");
        item.sort();
        grid[i] = item.join("");
    }

    let j;
    for(let i=0; i<grid.length-1; i++) {
        j = 0;
        while(j < grid[i].length) {
            if(grid[i][j] > grid[i+1][j]) {
                return "NO";
            }
            j++;
        }
    }
    return "YES";
}


const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
console.log(gridChallenge(grid));
console.log(gridChallenge(["abc", "lmp", "qrt"]));
console.log(gridChallenge(["mpxz", "abcd", "wlmf"]));
console.log(gridChallenge(["abc", "hjk", "mpq", "rtv"]));
console.log(gridChallenge(["kc", "iu"]));
console.log(gridChallenge(["uxf", "vof", "hmp"]));
