/* 
Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:

There are n chapters in Lisa's workbook, numbered from 1 to n.
The ith chapter has arr[i] problems, numbered from 1 to arr[i].
Each page can hold up to k problems. Only a chapter's last page of exercises may contain fewer than k problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at 1.
Given the details for Lisa's workbook, can you count its number of special problems?
Example
arr = [4, 2]
k = 3

Lisa's workbook contains arr[1] = 4 problems for chapter 1, and arr[2] = 2 problems for chapter 2. Each page can hold 3 problems.
The first page will hold 3 problems for chapter 1. 
Problem 1 is on page 1, so it is special. 
Page 2 contains only Chapter 1, Problem 4, so no special problem is on page 2. 
Chapter 2 problems start on page 3 and there are 2 problems. 
Since there is no problem 3 on page 3, there is no special problem on that page either. 

There is 1 special problem in her workbook.
*/



function workbook(n, k, arr) {
    let totalPage = 1;
    let chapterPage;
    let chapterWiseProblem = 0;
    let chapterWiseProblemStart;
    let chapterWiseProblemEnd;
    let special = 0;
    for(let i=0; i<n; i++) {
        chapterPage = parseInt(arr[i]/k);
        chapterPage += arr[i]%k > 0 ? 1 : 0;
        chapterWiseProblem = 0;
        for(let page=totalPage; page<totalPage+chapterPage; page++) {
            chapterWiseProblemStart = chapterWiseProblem+1;
            
            chapterWiseProblemEnd = (chapterWiseProblem+k <= arr[i]) ? chapterWiseProblem+k : arr[i];
            if(page>=chapterWiseProblemStart && page<=chapterWiseProblemEnd) {
                special++;
            }
            chapterWiseProblem += k;
        }
        totalPage += chapterPage;
    }
    return special;
}


console.log(workbook(2, 3, [4, 2]));
console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
