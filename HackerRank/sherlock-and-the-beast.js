/* 
A Decent Number has the following properties:
Its digits can only be 3's and/or 5's.
The number of 3's it contains is divisible by 5.
The number of 5's it contains is divisible by 3.
It is the largest such number for its length.

For example, the numbers 55533333 and 555555 are both decent numbers because there are 3 5's and 5 3's in the first, and 6 5's in the second. 
They are the largest values for those length numbers that have proper divisibility of digit occurrences.
*/


function decentNumber(n) {
    let number = "";
    if(n < 3) {
        console.log(-1);
    } else if(n%3 == 0) {
        for(let i=0; i<n; i++) {
            number += "5";
        }
        console.log(number);
    } else if(n-5 > 0 && (n-5)%3 == 0){
        for(let i=0; i<n-5; i++) {
            number += "5";
        }
        number += "33333";
        console.log(number);
    } else if(n-10 > 0 && (n-10)%3 == 0){
        for(let i=0; i<n-10; i++) {
            number += "5";
        }
        number += "3333333333";
        console.log(number);
    } else if(n%5 == 0) {
        for(let i=0; i<n; i++) {
            number += "3";
        }
        console.log(number);
    } else {
        console.log(-1);
    }
}

// decentNumber(2194);
// decentNumber(12002);
// decentNumber(21965);
// decentNumber(55140);
// decentNumber(57634);

// decentNumber(1); // -1
// decentNumber(3); // 555
// decentNumber(5); // 33333
// decentNumber(11); // 55555533333
// decentNumber(15); // 555555555555555
// decentNumber(13); // 5553333333333
// decentNumber(17); // 55555555555533333 555555555555 55555555555533336
// decentNumber(4); // -1
// decentNumber(7); // -1

decentNumber(1);
decentNumber(2);
decentNumber(3);
decentNumber(4);
decentNumber(5);
decentNumber(6);
decentNumber(7);
decentNumber(8);
decentNumber(9);
decentNumber(10);

