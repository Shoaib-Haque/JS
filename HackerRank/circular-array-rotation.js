/* 
John Watson knows of an operation called a right circular rotation on an array of integers. 
One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

Example
Sample Input
3 2 3
1 2 3
0
1
2

Sample Output
2
3
1

After the first rotation, the array is [3,1,2].
After the second (and final) rotation, the array is [2,3,1].
*/

function circularArrayRotation(a, k, queries) {
    let lastElement;
    for (let i = 0; i < k; i++) {
        lastElement = a.pop();
        a.unshift(lastElement);
    }
    queries.map((val, i) => {
        queries[i] = a[val];
    });
    return queries;
}

const a1 = [1,2,3];
const k1 = 2;
const queries1 = [0,1,2];
console.log(circularArrayRotation(a1, k1, queries1));

const a2 = [3,4,5];
const k2 = 2;
const queries2 = [1,2];
console.log(circularArrayRotation(a2, k2, queries2));
