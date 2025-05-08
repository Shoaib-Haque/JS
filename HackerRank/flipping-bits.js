/* 
You will be given a list of 32 bit unsigned integers. Flip all the bits (1->0 and 0->1) and return the result as an unsigned integer.
Example:
1
Return 
4294967294

00000000000000000000000000000001 = 1
11111111111111111111111111111110 = 4294967294
*/

function flippingBits(n) {
    let str = "00000000000000000000000000000000"
    let binary = n.toString(2);
    binary = str.substring(0, str.length-binary.length) + binary;
    let flipped = "";
    for(let i=0; i<binary.length; i++) {
        if(binary[i] == "0") {
            flipped += "1";
        } else {
            flipped += "0";
        }
    }
    
    return parseInt(flipped, 2);
}

console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));
console.log(flippingBits(4));
console.log(flippingBits(123456));
console.log(flippingBits(802743475));
console.log(flippingBits(35601423));

