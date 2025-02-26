/* 
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.

s = '00:01:00AM'
Return '00:01:00'.
*/

function timeConversion(s) {
    const type = s.substr(s.length-2, 2);
    const h = Number(s.substr(0, 2));
    if(type=="AM" && h==12) {
        return '00' + s.substr(2, 6);
    } else if(type=="AM") {
        return s.substr(0, 8);
    } else if(h==12) {
        return s.substr(0, 8);
    } else {
        return h + 12 + s.substr(2, 6);
    }
}


const s1 = '12:01:00AM';
const s2 = '01:01:00AM';
const s3 = '02:01:00AM';
const s4 = '03:01:00AM';
const s5 = '04:01:00AM';
const s6 = '05:01:00AM';
const s7 = '06:01:00AM';
const s8 = '07:01:00AM';
const s9 = '08:01:00AM';
const s10 = '09:01:00AM';
const s11 = '10:01:00AM';
const s12 = '11:01:00AM';
// const s3 = '00:01:00AM';
// const s4 = '12:01:00AM';

console.log(timeConversion(s1));
console.log(timeConversion(s2));
console.log(timeConversion(s3));
console.log(timeConversion(s4));
console.log(timeConversion(s5));
console.log(timeConversion(s6));
console.log(timeConversion(s7));
console.log(timeConversion(s8));
console.log(timeConversion(s9));
console.log(timeConversion(s10));
console.log(timeConversion(s11));
console.log(timeConversion(s12));
