/* 
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.
*/

function marsExploration(s) {
    let count = 0;
    for(let i=0; i<s.length; i+=3) {
        if(s[i] != "S") {
            count++;
        } 
        if(s[i+1] != "O") {
            count++;
        }
        if(s[i+2] != "S") {
            count++;
        }
    }
    return count;
}

console.log(marsExploration("SOSTOT"));
console.log(marsExploration("SOSSPSSQSSOR"));
console.log(marsExploration("SOSSOT"));
console.log(marsExploration("SOSSOSSOS"));
