
// sign of arrow function
() => {} 
//then we can store it in a variable
const arrowFunc = () => {};

console.log(arrowFunc);

const sum = (a, b) => {
    return a+b;
}

let a = sum(1,3);
let b = sum(4,7);

console.log(a, b);


const countVowels = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for(let char of str) {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
                count++;
            }
    }
    return count;
}

console.log(countVowels("abABefEFijIJopOPuvUV"));
console.log(typeof countVowels);