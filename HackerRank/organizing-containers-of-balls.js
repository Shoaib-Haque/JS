/* 
David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

David wants to perform some number of swap operations such that:

Each container contains only balls of the same type.
No two balls of the same type are located in different containers.

In a single operation, David can swap two balls located in different containers.

Example
container = [[1, 4], [2, 3]]

David has n=2 containers and 2 different types of balls, both of which are numbered from 0 to n-1=1. 

In this case, there is no way to have all green balls in one container and all red in the other using only swap operations. Return Impossible.

For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.
*/


function organizingContainers(container) {
    let box, total;
    let boxTotal = [];
    let ballTotal = [];
    for(let i=0; i<container.length; i++) {
        box = container[i];
        total = 0;
        
        for(let j=0; j<box.length; j++) {
            total += box[j];
            ballTotal[j] = ballTotal[j] == undefined ? box[j] : ballTotal[j]+box[j];
        }
        boxTotal.push(total);
    }

    boxTotal = boxTotal.sort((a, b) => b-a);
    ballTotal = ballTotal.sort((a, b) => b-a);

    for(let i in ballTotal) {
        if(ballTotal[i] > boxTotal[i]) {
            return "Impossible";
        }
    }

    return "Possible";

    // console.log(boxTotal);
    // console.log(ballTotal);
}

console.log(organizingContainers([[1, 4], [2, 3]]));
console.log(organizingContainers([[1, 1], [1, 1]]));
console.log(organizingContainers([[0, 2], [1, 1]]));
console.log(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]]));
console.log(organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]]));

