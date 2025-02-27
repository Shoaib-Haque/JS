/* 
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. 
In this PDF viewer, each word is highlighted independently. 
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
zaba
return 28
The tallest letter in zaba is z at 7mm. The selection area for this word is 4*7=28.
*/


function designerPdfViewer(h, word) {
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let heights = [];
    h.map((val, i) => {
        heights[chars[i]] = val;
    });
    let max = 0;
    for(let val of word) {
        max = heights[val]>max ? heights[val] : max;
    }
    return max*word.length;
}

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = "zaba";
console.log(designerPdfViewer(h, word));

