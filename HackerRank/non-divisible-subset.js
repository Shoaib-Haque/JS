/* 
Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.
*/

function getFilteredSubsets(arr) {
    const result = [];

    const n = arr.length;

    // Generate combinations of length from n down to 2
    for (let size = n; size >= 2; size--) {
        combine(arr, 0, [], size, result);
    }

    return result;
}

function combine(arr, start, path, size, result) {
    if (path.length === size) {
        result.push([...path]);
        return;
    }

    for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        combine(arr, i + 1, path, size, result);
        path.pop();
    }
}


function nonDivisibleSubset(k, s) {
    let subsets = [];
    const n = s.length;

    // Generate combinations of length from n down to 2
    for (let size = n; size >= 2; size--) {
        subsets = [];
        combine(s, 0, [], size, subsets);
        if(check(subsets, k)) {
            return subsets[0].length;
        }
    }
    return 0;
}

function check(subsets, k) {
    let flag = true;
    let subset;
    for(let i=0; i<subsets.length; i++) {
        flag = true;
        subset = subsets[i];
        for(let j=0; j<subset.length-1; j++) {
            for(let p=j+1; p<subset.length; p++) {
                if((subset[j]+subset[p])%k == 0) {
                    flag = false;
                    break;
                }
            }
            if(!flag) {
                break;
            }
        }
        if(flag) {
            return true;
        }
    }
    return false;
}

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
console.log(nonDivisibleSubset(3, [1, 7, 2, 4])); 
console.log(nonDivisibleSubset(1, [1, 2, 3, 4, 5])); 
/* 
1 7 2 4

1 7 2
1 2 4
7 2 4

1 7
    1 2 
1 4
    7 2
7 4
    2 4

*/

