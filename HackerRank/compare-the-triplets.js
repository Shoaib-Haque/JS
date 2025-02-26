/* 
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to calculate their comparison points by comparing each category:

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Example

a = [1, 2, 3]
b = [3, 2, 1]

The return array is [1, 1] with Alice's score first and Bob's second.
*/

function compareTriplets(a, b) {
    let res = [0, 0];
    a.forEach((val, index) => {
        if(a[index] > b[index]) {
            res[0]++;
        } else if(b[index] > a[index]) {
            res[1]++;
        }
    });
    return res;
}

const a = [1, 2, 3];
const b = [3, 2, 1];

console.log(compareTriplets(a, b));
