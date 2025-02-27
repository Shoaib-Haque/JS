/* 
A Discrete Mathematics professor has a class of students. 
Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. 
Arrival times go from on time (time <= 0) to arrived late (time > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

k = 3
a = [-1, -3, 4, 2] YES
k = 2
a = [0, -1, 2, 1] NO
*/

function angryProfessor(k, a) {
    a = a.sort((x, y) => x-y);
    /* let cnt = 0;
    for(let val of a) {
        if(val > 0) return "YES";
        cnt++;
        if(cnt == k) return "NO";
    } */
    
    let newA = a.filter((val) => val <= 0)
    return newA.length >= k ? "NO" : "YES";
}

const k = 3;
const a = [-1, -3, 4, 2]; //YES
console.log(angryProfessor(k, a));

const k1 = 2;
const a1 = [0, -1, 2, 1]; //NO
console.log(angryProfessor(k1, a1));