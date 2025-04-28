/* 
A numeric string, s, is beautiful if it can be split into a sequence of two or more positive integers, a[1], a[2],...,a[n] satisfying the following conditions:

1. a[i]--a[i-1] for any 1 < i <= n (i.e., each element in the sequence is 1 more than the previous element).
2. No a[i] contains a leading zero. For example, we can split s="10203" into the sequence {1, 02, 03}, but it is not beautiful because 02 and 03 have leading zeroes.
3. The contents of the sequence cannot be rearranged. For example, we can split s="312" into the sequence {3, 1, 2}, but it is not beautiful because it breaks our first constraint (i.e., 1--3 is not 1).

Perform q queries where each query consists of some integer string s. For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of x, choose the smallest. Otherwise, print NO.

Sample Input
1234
91011
99100
101103
010203
13
1
99910001001
7891011
9899100
999100010001

Sample Output
YES 1
YES 9
YES 99
NO
NO
NO
NO
YES 999
YES 7
YES 98
NO
*/

function separateNumbers(s) {
    if(s.length < 2 || s[0] == "0") {
        console.log("NO");
    }
    let tempS = s;
    let mid, first_half, second_half, tempMid, flag;
    while(tempS.length > 1) {
        mid = parseInt(tempS.length/2);
        mid = tempS.length%2 == 0 ? mid : mid+1;
        first_half = tempS.substr(0, mid);
        second_half = tempS.substr(mid);
        // console.log(first_half, second_half);
        tempMid = mid;
        flag = false;
        while(1) {
            console.log(first_half, second_half);
            if(first_half[0] != "0" && second_half[0] != "0") {
                if(parseInt(second_half)-parseInt(first_half) == 1) {
                    first_half = second_half;
                    second_half = s.substr(tempMid, mid);
                    flag = true;
                    if(tempMid+mid >= s.length) {
                        break;
                    }
                } else if(parseInt(second_half+s[tempMid+1])-parseInt(first_half) == 1 ) {
                    first_half = second_half+s[tempMid+1];
                    second_half = s.substr(tempMid+mid+1, mid+1);
                    // console.log("change",first_half, second_half);
                    flag = true;
                    if(tempMid+mid+1+mid+1 >= s.length) {
                        break;
                    }
                } else {
                    flag = false;
                    break;
                }
                tempMid = tempMid+mid+1;
            } else {
                flag = false;
                break;
            }
        }

        if(flag) {
            console.log("Yes");
            break;
        }
        tempS = tempS.substr(0, mid);
        // console.log(mid, tempS);
    }
    if(!flag) {
        console.log("NO");
    }
}

separateNumbers("1234");
// separateNumbers("91011");
// separateNumbers("99100");
// separateNumbers("101103");
// separateNumbers("010203");
// separateNumbers("13");
// separateNumbers("1");

separateNumbers("99910001001");
// separateNumbers("7891011");
// separateNumbers("9899100");
// separateNumbers("999100010001");