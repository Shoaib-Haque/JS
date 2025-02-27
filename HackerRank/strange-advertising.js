/* 
HackerLand Enterprise is adopting a new viral advertising strategy. 
When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day, half of those 5 people (i.e., 5/2 = 2) like the advertisement and each shares it with 3 of their friends. 
At the beginning of the second day, 2*3 = 6 people receive the advertisement.

Each day, 1/2 of the recipients like the advertisement and will share it with 3 friends on the following day. 
Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
*/

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for(i=0; i<n; i++) {
        liked = parseInt(shared/2);
        cumulative += liked;
        shared = liked*3;
    }
    return cumulative;
}

console.log(viralAdvertising(5)); //24
console.log(viralAdvertising(3)); //9
