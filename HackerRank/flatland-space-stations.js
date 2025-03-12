/* 
Flatland is a country with a number of cities, some of which have space stations. 
Cities are numbered consecutively and each has a road of  length connecting it to the next city. 
It is not a circular route, so the first city doesn't connect with the last city. 
Determine the maximum distance from any city to its nearest space station.
*/

function flatlandSpaceStations(n, c) {
    let max = 0;
    let nearest;
    for(let city=0; city<n; city++) {
        nearest = undefined;
        if(!c.includes(city)) {
            c.map((val) => {
                if(nearest == undefined || Math.abs(city-val) < nearest) {
                    nearest = Math.abs(city-val);
                }
            });
            if(nearest > max) {
                max = nearest;
            }
        }
        
    }
    return max;
}


console.log(flatlandSpaceStations(3, [1]));
console.log(flatlandSpaceStations(5, [0, 4]));
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));
console.log(flatlandSpaceStations(5, [0, 4]));
