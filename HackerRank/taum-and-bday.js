/* 
Taum is planning to celebrate the birthday of his friend, Diksha. 
There are two types of gifts that Diksha wants from Taum: one is black and the other is white. 
To make her happy, Taum has to buy b black gifts and w white gifts.

The cost of each black gift is bc units.
The cost of every white gift is wc units.
The cost to convert a black gift into white gift or vice versa is z units.
Determine the minimum cost of Diksha's gifts.

Example
b = 3
w = 5
bc = 3
wc = 4
z = 1

cost is 29
*/

function taumBday(b, w, bc, wc, z) {
    [b, w, bc, wc, z] = [b, w, bc, wc, z].map(n => BigInt(n)); // there are some case of bigInt
    let cost;
    if(bc+z<wc) {
        cost = (b*bc)+(w*bc)+(z*w);
    } else if(wc+z<bc) {
        cost = (b*wc)+(w*wc)+(z*b);
    } else {
        cost = (b*bc)+(w*wc);
    }
    return cost;
}

console.log(taumBday(3, 5, 3, 4, 1)); //29
console.log(taumBday(10, 10, 1, 1, 1)); //20
console.log(taumBday(5, 9, 2, 3, 4)); //37
console.log(taumBday(3, 6, 9, 1, 1)); //12
console.log(taumBday(7, 7, 4, 2, 1)); //35
console.log(taumBday(3, 3, 1, 9, 2)); //12
 
