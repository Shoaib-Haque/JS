/* 
Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). 

The fee structure is as follows:
If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.)

If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, 
fine = 15 Hackos*the number of days late.

If the book is returned after the expected return month but still within the same calendar year as the expected return date, 
fine = 500 Hackos*the number of months late.

If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

Charges are based only on the least precise measure of lateness. 
For example, whether a book is due January 1, 2017 or December 31, 2017, 
if it is returned January 1, 2018, that is a year late and the fine would be 10000 Hackos.

d1, m1, y1 are returned date
d2, m2, y2 are due date
*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if((y1 < y2) || (y1 == y2 && m1 < m2) || (y1 == y2 && m1 == m2 && d1 <= d2)) {
        return 0;
    } 

    if(y1 > y2) { // after due year
        return 10000;
    } else if(y1 == y2 && m1 > m2) { //after due month
        return 500*(m1-m2);
    } else if(y1 == y2 && m1 == m2 && d1 > d2) {
        return 15*(d1-d2);
    }
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018)); //135
console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); //45

console.log(libraryFine(2, 5, 2017, 6, 6, 2016)); //10000 // after due year
console.log(libraryFine(2, 9, 2015, 6, 6, 2015)); //1500 //after due month
console.log(libraryFine(7, 6, 2015, 6, 6, 2015)); //15 //after due date

console.log(libraryFine(2, 9, 2015, 6, 6, 2016)); //0 // before due year
console.log(libraryFine(18, 5, 2015, 6, 6, 2015)); //0 // before due month
console.log(libraryFine(5, 6, 2015, 6, 6, 2015)); //0 // before due date
console.log(libraryFine(6, 6, 2015, 6, 6, 2015)); //0 // same as due date
