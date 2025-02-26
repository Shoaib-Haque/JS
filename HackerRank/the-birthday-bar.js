/* 
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

Example
s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, 4 = 4 with a length equalling his birth month, m = 2. 
In this case, there are two segments meeting her criteria: [2, 2] and [1, 3] . 
*/


function birthday(s, d, m) {
    const max = s.length-m;
    let count = 0;
    let sum = 0;
    let i=0;
    let sliced = s.slice(i,i+m);
    for(let j=0; ; j++) {
        sum += sliced[j];
        if(j==sliced.length-1) {
            if(sum==d) {
                count++;
            }
            if(i==max) {
                return count;
            } 
            i++;
            sliced = s.slice(i,i+m);
            sum = 0;
            j=-1;
        }
    }

    /* for(let i=0;i<=max;i++) {
        let sliced = s.slice(i,i+m);
        
        sum += sliced.reduce((a, b) => {
            return a+b;
        });
        if(sum==d) {
            count++;
        }
        sum=0;
    }
    return count; */

    /* let count = 0;
    for(let i = 0; i < s.length; i++) {
        let arr = s.slice(0 + i, m + i);

        console.log(arr, arr.reduce((a,b) => a+ b));
    
        if(arr.reduce((a,b) => a+ b) === d) {           
            count++;      
        }      
    
    }
    return count */
}
const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d = 18;
const m = 7;
console.log(birthday(s, d, m));