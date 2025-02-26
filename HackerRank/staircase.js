/* 
Staircase detail

This is a staircase of size, n = 4 :

   # 4, 4-0 = 4, 
  ## 4, 4-1 = 3
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
*/



function staircase(n) {
    let cnt = 1;
    let stair = "";
    let j = 0;
    for(let i=0; i<n;){
        if(j<n-i-1) {
            stair += " ";
        } else {
            stair += "#";
        }

        if(j==n-1) {
            console.log(stair);
            stair = "";
            i++;
            j=0;
        } else {
            j++;
        }
    }
}

staircase(4);