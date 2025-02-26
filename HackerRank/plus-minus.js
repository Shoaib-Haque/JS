/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative , and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.

Example
arr = [1, 1, 0, -1, -1]
There are  elements: two positive, two negative and one zero. Their ratios and Results are printed as:

0.400000
0.400000
0.200000
*/


function plusMinus(arr) {
    let p = 0; 
    let n = 0;
    let z = 0;

    /* for(let item of arr) {
        if(item > 0) {
            p++;
        } else if(item < 0) {
            n++;
        } else {
            z++;
        }
    } */

    // arr.map((item) => {
    //     if(item > 0) {
    //         p++;
    //     } else if(item < 0) {
    //         n++;
    //     } else {
    //         z++;
    //     }
    // });

    arr.forEach((item) => {
        if(item > 0) {
            p++;
        } else if(item < 0) {
            n++;
        } else {
            z++;
        }
    });

    console.log(parseFloat(p/arr.length).toPrecision(6));
    console.log(parseFloat(n/arr.length).toPrecision(6));
    console.log(parseFloat(z/arr.length).toPrecision(6));
}

const arr = [1, 1, 0, -1, -1];

plusMinus(arr);
