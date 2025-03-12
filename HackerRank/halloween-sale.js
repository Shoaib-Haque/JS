/* 
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. 
However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. 
Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one. 
This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. 
How many games can you buy during the Halloween Sale?
*/

function howManyGames(p, d, m, s) {
    let games = 0;
    let totalCost = 0;
    while(1) {
        if(totalCost+p <= s) {
            totalCost += p;
            games++;
        } else {
            return games;
        }
        if(totalCost >= s) {
            return games;
        }
        if(p-d>=m) {
            p -= d;
        } else {
            p = m;
        }
    }
}

console.log(howManyGames(20, 3, 6, 70)); // 5
console.log(howManyGames(20, 3, 6, 85)); // 7
