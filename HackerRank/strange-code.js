/* 
There is a strange counter. At the first second, it displays the number 3. 
Each second, the number displayed by decrements by 1 until it reaches 1. 
In next second, the timer resets to 2*the initial number for the prior cycle and continues counting down.
*/

function strangeCounter(t) {
    let s = 1;
    let initial = 3;
    if(s == t) {
        return initial;
    }
    while(s<t) {
        if(s + initial > t) {
            let d = t - s;
            return initial-d;
        }
        s += initial;
        initial *= 2;
        if(s == t) {
            return initial;
        }
    }
}

console.log(strangeCounter(21));
console.log(strangeCounter(4));
