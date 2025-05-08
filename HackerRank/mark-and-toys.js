/* 
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

Note Each toy can be purchased only once.

Example
prices = [1, 2, 3, 4]
k = 7

The budget is 7 units of currency. He can buy items that cost [1, 2, 3] for 6, or [3, 4] for 7 units. The maximum is 3 items.
*/

function maximumToys(prices, k) {
    prices = prices.sort((a, b) => a-b);
    let toy = 0;
    let total = 0;
    for(let i=0; i<prices.length; i++) {
        total += prices[i];
        if(total <= k) {
            toy++;
        }
    }
    return toy;
}

console.log(maximumToys([1, 2, 3, 4], 7));
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));



