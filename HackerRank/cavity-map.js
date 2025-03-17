
/* 
You are given a square map as a matrix of integer strings. 
Each cell of the map has a value denoting its depth. 
We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. 
Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

Example
The grid is rearranged for clarity:
'989'
'191'
'111'

Return:
989
1X1
111

The center cell was deeper than those on its edges: [8,1,1,1]. 
The deep cells in the top two corners do not share an edge with the center cell, and none of the border cells is eligible.
*/

function cavityMap(grid) {
    let res = [];
    for(let i = 0; i < grid.length; i++) {
        res[i] = "";
        for (let j = 0; j < grid[i].length; j++) {
            if(i != 0 && i != grid.length-1 && j != 0 && j != grid[i].length-1) {
                if(grid[i][j] > grid[i-1][j] && grid[i][j] > grid[i+1][j] && grid[i][j] > grid[i][j-1] && grid[i][j] > grid[i][j+1]) {
                    res[i] += "X";
                } else {
                    res[i] += grid[i][j];
                }
            } else {
                res[i] += grid[i][j];
            }
        }
    }
    return res;
}

const grid1 = ['989', '191', '111'];
console.log(cavityMap(grid1));
const grid2 = ['1112', '1912', '1892', '1234'];
console.log(cavityMap(grid2));