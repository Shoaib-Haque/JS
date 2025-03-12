/* 
Little Bobby loves chocolate. He frequently goes to his favorite store, Penny Auntie, to buy them. 
They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

*/

function chocolateFeast(n, c, m) {
    let totalChocolate = parseInt(n/c);
    let wrapper = totalChocolate;
    let newChocolate;
    while(wrapper >= m) {
        newChocolate = parseInt(wrapper/m);
        wrapper = newChocolate + wrapper%m;
        totalChocolate += newChocolate;
    }
    return totalChocolate;
}

console.log(chocolateFeast(15, 3, 2)); //9
console.log(chocolateFeast(10, 2, 5)); //6
console.log(chocolateFeast(12, 4, 4)); //3
console.log(chocolateFeast(6, 2, 2)); //5
