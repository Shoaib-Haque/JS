/* 
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:


                                    Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
*/


function breakingRecords(scores) {
    let max = 0;
    let min = 0;
    let maxCnt = 0;
    let minCnt = 0;

    scores.map((val, i) => {
        if(i == 0) {
            max = val;
            min = val;
        } else {
            if(val > max) {
                max = val;
                maxCnt++;
            } else if(val < min) {
                min = val;
                minCnt++;
            }
        }
    });

    return [maxCnt, minCnt];
}

const scores1 = [12, 24, 10, 24];
console.log(breakingRecords(scores1));

const scores2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores2));

const scores3 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(scores3));


