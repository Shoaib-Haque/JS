/* 
There are a number of people who will be attending ACM-ICPC World Finals. 
Each of them may be well versed in a number of topics. 
Given a list of topics known by each attendee, presented as binary strings, 
determine the maximum number of topics a 2-person team can know. 

Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not. 
Also determine the number of teams that know the maximum number of topics. 

Return an integer array with two elements. 
The first is the maximum number of topics known, and the second is the number of teams that know that number of topics.
topic = ['10101', '11110', '00010']
*/


function acmTeam(topic) {
    const totalTopic = topic[0].length;
    let teamKnow = 0;
    let maxKnow = 0;
    let maxTeamKnow = 0;
    for (let i = 0; i < topic.length-1; i++) {
        for (let j = i+1; j < topic.length; j++) {
            teamKnow = 0;
            for(let k=0; k<totalTopic; k++) {
                if(topic[i][k] == '1' || topic[j][k] == '1') {
                    teamKnow++;
                }
            }
            if(teamKnow > maxKnow) {
                maxKnow = teamKnow;
                maxTeamKnow = 1;
            } else if(teamKnow == maxKnow) {
                maxTeamKnow++;
            }
        }
    }
    return [maxKnow, maxTeamKnow];
}

const topic = ['10101', '11110', '00010'];
console.log(acmTeam(topic)); // 5, 1

const topic1 = ['10101', '11100', '11010', '00101'];
console.log(acmTeam(topic1)); // 5, 2
