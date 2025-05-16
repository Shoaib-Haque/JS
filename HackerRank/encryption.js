/* 
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let L be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

√L <= row <= column <= √L

where, row can be ceil and column can be floor

Example
s = if man was meant to stay on the ground god would have given us roots

After removing spaces, the string is 54 characters long. √54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots

1. Ensure that rows*column >= L
2. If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows*column.

The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

*/

function encryption(s) {
    s = s.replace(/ /g, "")
    let length = s.length;
    let lRoot = Math.sqrt(length);
    let ceil = parseInt(lRoot);
    let floor = ceil+1;
    let row, col;
    
    if(ceil*ceil >= length) {
        row = ceil;
        col = ceil;
    } else if(ceil*floor >= length) {
        row = ceil;
        col = floor;
    } else {
        row = floor;
        col = floor;
    }
    let arr = [];
    let j;
    for(let i=0; i<s.length;i++) {
        j = i%col;
        arr[j] = arr[j] == undefined ? s[i] : arr[j]+s[i];
    }
    return arr.join(" ");
}


console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
console.log(encryption("haveaniceday"));
console.log(encryption("feedthedog"));
console.log(encryption("chillout"));
