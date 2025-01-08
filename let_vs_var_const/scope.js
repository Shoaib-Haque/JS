// var: Function-scoped.
// Variables declared with var are scoped to the entire function in which they are defined, or globally if not in a function.

function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible outside the block)
}
testVar();
// let: Block-scoped.
// Variables declared with let are scoped to the block in which they are defined (e.g., within { }).

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ReferenceError: y is not defined
}
testLet();