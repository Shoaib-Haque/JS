/* 
Priyanka works for an international toy company that ships by container. Her task is to the determine the lowest cost way to combine her orders for shipping. She has a list of item weights. The shipping company has a requirement that all items loaded in a container must weigh less than or equal to 4 units plus the weight of the minimum weight item. All items meeting that requirement will be shipped in one container.

What is the smallest number of containers that can be contracted to ship the items based on the given list of weights?

For example, there are items with weights [1, 2, 3, 4, 5, 10, 11, 12, 13]. 
This can be broken into two containers: [1, 2, 3, 4, 5] and [10, 11, 12, 13]. Each container will contain items weighing within  units of the minimum weight item.
*/

function toys(w) {
    w = w.sort((a, b) => a-b);
    
    let container = 0;
    let maxWeight = 0;
    for(let i=0; i<w.length;) {
        maxWeight = w[i]+4;
        while(w[i] <= maxWeight) {
            i++;
        }
        container++;
    }
    return container;
}

console.log(toys([1, 2, 3, 4, 5, 10, 11, 12, 13]));
console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));
console.log(toys([16, 18, 10, 13, 2, 9, 17, 17, 0, 19]));
