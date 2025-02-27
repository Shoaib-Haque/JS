/* 
Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
Complete the function to return the appropriate answer to each query, which will be printed on a new line.

If cat A catches the mouse first, print Cat A.
If cat B catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

x = 1 
y = 2 
z = 3
Cat B

x = 1 
y = 3 
z = 2
Mouse C
*/




function catAndMouse(x, y, z) {
    const A = Math.abs(x-z);
    const B = Math.abs(y-z);

    if(A<B) {
        return "Cat A";
    } else if(B<A) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

const x = 1;
const y = 2;
const z = 3;
console.log(catAndMouse(x, y, z));

const x1 = 1;
const y1 = 3;
const z1 = 2;
console.log(catAndMouse(x1, y1, z1));

