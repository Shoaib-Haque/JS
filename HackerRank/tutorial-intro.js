/* 
Given a sorted array () and a number (), can you print the index location of  in the array?
*/

function introTutorial(V, arr) {
    arr = arr.sort((a, b) => {a-b});
    for (let i = 0; i < arr.length; i++) {
        if(V == arr[i]) return i;
    }
}

console.log(introTutorial(3, [1, 2 ,3]));
console.log(introTutorial(4, [1, 4, 5, 7, 9, 12]));
