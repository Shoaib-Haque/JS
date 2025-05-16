/* 
Given the time in numerals we may convert it into words, as shown below:

At minutes=0, use o' clock. 
For 1<=minutes<=30, use past, and for 30<minutes use to. 

Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.
*/

function timeInWords(h, m) {
    let hours = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let minutes = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four',
        'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty'
    ];
    let next, to;
    if(m == 0) {
        return hours[h] + " o' clock";
    } else if(m == 1) {
        return minutes[m] + " minute past " + hours[h];
    } else if(m == 15) {
        return "quarter past " + hours[h];
    } else if(m == 30) {
        return "half past " + hours[h];
    } else if(m<30) {
        return minutes[m] + " minutes past " + hours[h];
    } else if(m == 45) {
        next = h+1 > 12 ? hours[h+1-12] : hours[h+1];
        return "quarter to " + next;
    } else if(m == 59) {
        next = h+1 > 12 ? hours[h+1-12] : hours[h+1];
        return minutes[m] + " minute to " + next;
    } else {
        next = h+1 > 12 ? hours[h+1-12] : hours[h+1];
        to = 60-m;
        return minutes[to] + " minutes to " + next;
    }
}

console.log(timeInWords(5, 0));
console.log(timeInWords(5, 1));
console.log(timeInWords(5, 10));
console.log(timeInWords(5, 15));
console.log(timeInWords(5, 28));
console.log(timeInWords(5, 30));
console.log(timeInWords(5, 40));
console.log(timeInWords(5, 45));
console.log(timeInWords(5, 47));
console.log(timeInWords(12, 47));



