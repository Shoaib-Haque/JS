/* 
Given an array of strings of digits, try to find the occurrence of a given pattern of digits. In the grid and pattern arrays, each string represents a row in the grid. 

For example, consider the following grid:
1234567890  
0987654321  
1111111111  
1111111111  
2222222222  

The pattern array is:
876543  
111111  
111111

The pattern begins at the second row and the third column of the grid and continues in the following two rows. The pattern is said to be present in the grid. 

The return value should be YES or NO, depending on whether the pattern is found. In this case, return YES.
*/

function gridSearch(G, P) {
    let j=0;
    let grid_row, pattern_row, index;
    let pattern_length = P[0].length;
    let grid_col = [];
    let temp_grid_col = []

    for(let i=0; i<G.length; i++) {
        grid_row = G[i];
        pattern_row = P[j];
        
        if((j == 0 && grid_row.includes(pattern_row))) {
            index = grid_row.indexOf(pattern_row);
            while (index !== -1) {
                grid_col.push(index);
                index = grid_row.indexOf(pattern_row, index + 1);
            }
            j++;
        } else if((grid_col.length != 0)) {
            for(let k=0; k<grid_col.length; k++) {
                if(grid_row.substr(grid_col[k], pattern_length) == pattern_row) {
                    if(j == P.length-1) {
                        return "YES";
                    }
                    temp_grid_col.push(grid_col[k]);
                }
            }

            if(temp_grid_col.length == 0) {
                --i;
                j=0;
                grid_col = [];
            } else {
                j++;
                grid_col = temp_grid_col;
            }
            temp_grid_col = [];
        } else {
            j=0;
            grid_col = [];
        }
    }
    
    return "NO"
}


console.log(gridSearch(['1234567890', '0987654321', '111111111', '1111111111', '2222222222'], ['876543', '111111', '111111']));
console.log(gridSearch(['123412', '561212', '123634', '781288'], ['12', '34']));



