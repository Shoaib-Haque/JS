/* 
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where s is the start point, and t is the endpoint. 
The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. 
*A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

countApplesAndOranges has the following parameter(s):
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.

Output Format
Print two integers on two different lines:
The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house.

Sample Input
7 11 [s, t]
5 15 [a, b]
-2 2 1 [apples]
5 -6 [oranges]

Sample Output
1
1
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesLength = apples.length;
    let orangesLength = oranges.length;
    let l = applesLength >= orangesLength ? applesLength : orangesLength;
    let appleCnt = 0;
    let orangeCnt = 0;
    for (let i = 0; i < l; i++) {
        if(apples[i] != undefined && a+apples[i] >= s && a+apples[i] <= t) {
            appleCnt++;
        }
        if(oranges[i] != undefined && b+oranges[i] >= s && b+oranges[i] <= t) {
            orangeCnt++;
        }
    }

    console.log(appleCnt);
    console.log(orangeCnt);
}

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [4, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
