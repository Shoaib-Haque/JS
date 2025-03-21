/* 
Lily likes to play games with integers. 
She has created a new game where she determines the difference between a number and its reverse. 
For instance, given the number 12, its reverse is 21. Their difference is 9. 
The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. 
She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. 
Beautiful numbers are defined as numbers where |i-reverse_i| is evenly divisible by k. 
If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
*/


function beautifulDays(i, j, k) {
    let d;
    let rev = "";
    let cnt = 0;
    for(; i<=j; i++) {
        rev = "";
        d = i;
        while(d > 0) {
            rev += d%10;
            d = parseInt(d/10);
        }
        // console.log('i', i);
        // console.log('rev', rev);
        // console.log('int', parseInt(rev));
        // console.log('abs', Math.abs(i-parseInt(rev)));
        // console.log('dev', Math.abs(i-parseInt(rev))%k);
        // console.log();
        
        if((Math.abs(i-parseInt(rev)))%k == 0) cnt++;
    }
    return cnt;
}

console.log(beautifulDays(20, 23, 6));
