/* 
You are given an unordered array of unique integers incrementing from . You can swap any two elements a limited number of times. Determine the largest lexicographical value array that can be created by executing no more than the limited number of swaps.

Example
arr = [1, 2, 3, 4]
k = 1

The following arrays can be formed by swapping the  with the other elements:

[2,1,3,4]
[3,2,1,4]
[4,2,3,1]

The highest value of the four (including the original) is [4,2,3,1]. 
*/


function largestPermutation(k, arr) {
    const originalArr = Array.from(arr)
    let index = 0
    let changed = 0
    arr.sort((a, b) => b - a)

    if (k === 0) return originalArr

    if (k >= originalArr.length) return arr

    for (let i = 0; i <= originalArr.length - 1; i++) {
        for (let ind = 0; ind <= originalArr.length - 1; ind++) {
            if (originalArr[ind] === arr[i]) {
                index = ind
                break
            }
        }

        if (index > i) {
            [originalArr[i], originalArr[index]] = [arr[i], originalArr[i]]

            changed++
            if (changed === k) break
        }
    }

    return originalArr
}

console.log(largestPermutation(1, [1, 2, 3, 4]));
console.log(largestPermutation(4, [1, 3, 2, 4]));
console.log(largestPermutation(4, [4, 3, 2, 1]));
