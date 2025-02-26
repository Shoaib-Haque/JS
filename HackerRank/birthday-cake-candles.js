/* 
You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

Example
candles = [4, 4, 1, 3]

The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.
*/

function birthdayCakeCandles(candles) {
    candles = candles.sort((a,b) => a-b);
    const lastIndex = candles.length-1;
    const max = candles[lastIndex];
    let count = 0;
    for(let i=lastIndex;i>=0;i--) {
        if(candles[i] != max) {
            break;
        }
        count++;
    }
    return count;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
