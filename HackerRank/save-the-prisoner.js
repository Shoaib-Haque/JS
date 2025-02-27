/* 
A jail has a number of prisoners and a number of treats to pass out to them. 
Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. 
A chair number will be drawn from a hat. Beginning with the prisoner in that chair, 
one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. 
Determine the chair number occupied by the prisoner who will receive that candy.

Example
n = 4
m = 6
s = 2

There are 4 prisoners, 6 pieces of candy and distribution starts at chair 2.
The prisoners arrange themselves in seats numbered 1 to 4. 
Prisoners receive candy at positions 2, 3, 4, 1, 2, 3. The prisoner to be warned sits in chair number 3.
*/


function saveThePrisoner(n, m, s) {
    if(((n-s)+1) >= m) {
        return (s-1)+m;
    }
    let rest = m-((n-s)+1);
    return rest%n == 0 ? n : rest%n;
}

console.log(saveThePrisoner(4, 6, 2)); //3
console.log(saveThePrisoner(4, 12, 2)); //1
console.log(saveThePrisoner(5, 2, 1)); //2
console.log(saveThePrisoner(5, 2, 2)); //3 
console.log(saveThePrisoner(5, 4, 2)); //5 
console.log(saveThePrisoner(7, 19, 2)); //6
console.log(saveThePrisoner(3, 7, 3)); //3
