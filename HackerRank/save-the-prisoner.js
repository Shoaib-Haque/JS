/* 


*/


function saveThePrisoner(n, m, s) {
    if(((n-s)+1) >= m) {
        return (s-1)+m;
    }
    let rest = m-((n-s)+1);
    return rest%n == 0 ? n : rest%n;
}

console.log(saveThePrisoner(4, 6, 2)); //3
console.log(saveThePrisoner(4, 12, 2)); //1
console.log(saveThePrisoner(5, 2, 1)); //2
console.log(saveThePrisoner(5, 2, 2)); //3 
console.log(saveThePrisoner(5, 4, 2)); //5 
console.log(saveThePrisoner(7, 19, 2)); //6
console.log(saveThePrisoner(3, 7, 3)); //3
