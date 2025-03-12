/* 
A driver is driving on the freeway. 
The check engine light of his vehicle is on, and the driver wants to get service immediately. 
Luckily, a service lane runs parallel to the highway. 
It varies in width along its length.


You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. 
Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

Example
width = [2, 3, 1, 2, 3, 2, 3, 3]
cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]

output
[ 1, 2, 3, 2, 1 ]
*/

function serviceLane(width, cases) {
    let start;
    let end;
    let slice;
    let res = [];
    for (let i = 0; i < cases.length; i++) {
        start = cases[i][0];
        end = cases[i][1];
        slice = width.slice(start, end+1);
        slice = slice.sort((a,b) => a-b);
        res.push(slice[0]);
    }
    return res;
}


const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

console.log(serviceLane(width, cases));
