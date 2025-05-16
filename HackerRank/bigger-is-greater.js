/* 
Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition

Example
w = abcd
The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/


function biggerIsGreater(w) {
    let flag = true;
    let index, char;
    for(let i=w.length-1; i>0; i--) {
        if(w[i].charCodeAt(0) > w[i-1].charCodeAt(0)) {
            flag = false;
            index = i-1;
            char = w[index];
            break;
        }
    }
    if(flag) {
        return "no answer";
    }

    let smallIndex, small;
    for(let i=index+1; i<w.length; i++) {
        if(w[i].charCodeAt(0) > char.charCodeAt(0) && (small == undefined || w[i].charCodeAt(0) < small.charCodeAt(0))) {
            smallIndex = i;
            small = w[smallIndex];
        }
    }

    let arr = w.split('');
    [arr[index], arr[smallIndex]] = [arr[smallIndex], arr[index]];

    let left = arr.slice(0, index + 1);
    let right = arr.slice(index + 1).sort();

    return left.concat(right).join('');
}

console.log(biggerIsGreater("abcd"));
console.log(biggerIsGreater("ab"));
console.log(biggerIsGreater("bb"));
console.log(biggerIsGreater("hefg"));
console.log(biggerIsGreater("dhck"));
console.log(biggerIsGreater("dkhc")); // hcdk  i=2, j=0;  cdhk
console.log(biggerIsGreater("ehdegnmorgafrjxvksc")); // ehdegnmorgafrjxvsck  i=2, j=0;  // ehdegnmorgcafrjxvks

console.log(biggerIsGreater("lmno"));
console.log(biggerIsGreater("dcba"));
console.log(biggerIsGreater("dcbb"));
console.log(biggerIsGreater("abdc"));
console.log(biggerIsGreater("fedcbabcd"));

// console.log(biggerIsGreater("imllmmcslslkyoegymoa"));
// console.log(biggerIsGreater("fvincndjrurfh"));
// console.log(biggerIsGreater("rtglgzzqxnuflitnlyit"));
// console.log(biggerIsGreater("mhtvaqofxtyrz"));
// console.log(biggerIsGreater("zalqxykemvzzgaka"));

// console.log(biggerIsGreater("wjjulziszbqqdcpdnhdo"));
// console.log(biggerIsGreater("japjbvjlxzkgietkm"));
// console.log(biggerIsGreater("jqczvgqywydkunmjw"));
// console.log(biggerIsGreater("ehdegnmorgafrjxvksc"));
// console.log(biggerIsGreater("tydwixlwghlmqo"));
// console.log(biggerIsGreater("wddnwjneaxbwhwamr"));
// console.log(biggerIsGreater("pnimbesirfbivxl"));
// console.log(biggerIsGreater("mijamkzpiiniveik"));
// console.log(biggerIsGreater("qxtwpdpwexuej"));
// console.log(biggerIsGreater("qtcshorwyck"));
// console.log(biggerIsGreater("xoojiggdcyjrupr"));
// console.log(biggerIsGreater("vcjmvngcdyabcmjz"));
// console.log(biggerIsGreater("xildrrhpca"));
// console.log(biggerIsGreater("rrcntnbqchsfhvijh"));
// console.log(biggerIsGreater("kmotatmrabtcomu"));
// console.log(biggerIsGreater("bnfcejmyotvw"));
// console.log(biggerIsGreater("dnppdkpywiaxddoqx"));
// console.log(biggerIsGreater("tmowsxkrodmkkra"));
// console.log(biggerIsGreater("jfkaehlegohwggf"));
// console.log(biggerIsGreater("ttylsiegnttymtyx"));
// console.log(biggerIsGreater("kyetllczuyibdkwyihrq"));
// console.log(biggerIsGreater("xdhqbvlbtmmtshefjf"));
// console.log(biggerIsGreater("kpdpzzohihzwgdfzgb"));
// console.log(biggerIsGreater("kuywptftapaa"));
// console.log(biggerIsGreater("qfqpegznnyludrv"));
// console.log(biggerIsGreater("ufwogufbzaboaepslikq"));
// console.log(biggerIsGreater("jfejqapjvbdcxtkry"));
// console.log(biggerIsGreater("sypjbvatgidyxodd"));
// console.log(biggerIsGreater("wdpfyqjcpcn"));
// console.log(biggerIsGreater("baabpjckkytudr"));
// console.log(biggerIsGreater("uvwurzjyzbhcqmrypraq"));
// console.log(biggerIsGreater("kvtwtmqygksbim"));
// console.log(biggerIsGreater("ivsjycnooeodwpt"));
// console.log(biggerIsGreater("zqyxjnnitzawipqsm"));
// console.log(biggerIsGreater("blmrzavodtfzyepz"));
// console.log(biggerIsGreater("bmqlhqndacv"));
// console.log(biggerIsGreater("phvauobwkrcfwdecsd"));
// console.log(biggerIsGreater("vpygyqubqywkndhpzw"));
// console.log(biggerIsGreater("yikanhdrjxw"));
// console.log(biggerIsGreater("vnpblfxmvwkflqobrk"));
// console.log(biggerIsGreater("pserilwzxwyorldsxksl"));
// console.log(biggerIsGreater("qymbqaehnyzhfqpqprpl"));
// console.log(biggerIsGreater("fcakwzuqlzglnibqmkd"));
// console.log(biggerIsGreater("jkscckttaeifiksgkmxx"));
// console.log(biggerIsGreater("dkbllravwnhhfjjrce"));
// console.log(biggerIsGreater("imzsyrykfvjt"));
// console.log(biggerIsGreater("tvogoocldlukwfcajvix"));
// console.log(biggerIsGreater("cvnagtypozljpragvlj"));
// console.log(biggerIsGreater("hwcmacxvmus"));
// console.log(biggerIsGreater("rhrzcpprqccf"));
// console.log(biggerIsGreater("clppxvwtaktchqrdif"));
// console.log(biggerIsGreater("qwusnlldnolhq"));
// console.log(biggerIsGreater("yitveovrja"));
// console.log(biggerIsGreater("arciyxaxtvmfgquwb"));
// console.log(biggerIsGreater("pzbxvxdjuuvuv"));
// console.log(biggerIsGreater("nxfowilpdxwlpt"));
// console.log(biggerIsGreater("swzsaynxbytytqtq"));
// console.log(biggerIsGreater("qyrogefleeyt"));
// console.log(biggerIsGreater("iotjgthvslvmjpcchhuf"));
// console.log(biggerIsGreater("knfpyjtzfq"));
// console.log(biggerIsGreater("tmtbfayantmwk"));
// console.log(biggerIsGreater("asxwzygngwn"));
// console.log(biggerIsGreater("rmwiwrurubt"));
// console.log(biggerIsGreater("bhmpfwhgqfcqfldlhs"));
// console.log(biggerIsGreater("yhbidtewpgp"));
// console.log(biggerIsGreater("jwwbeuiklpodvzii"));
// console.log(biggerIsGreater("anjhprmkwibe"));
// console.log(biggerIsGreater("lpwhqaebmr"));
// console.log(biggerIsGreater("dunecynelymcpyonjq"));
// console.log(biggerIsGreater("hblfldireuivzekegit"));
// console.log(biggerIsGreater("uryygzpwifrricwvge"));
// console.log(biggerIsGreater("kzuhaysegaxtwqtvx"));
// console.log(biggerIsGreater("kvarmrbpoxxujhvgpw"));
// console.log(biggerIsGreater("hanhaggqzdpunkugzmhq"));
// console.log(biggerIsGreater("gnwqwsylqeuqr"));
// console.log(biggerIsGreater("qzkjbnyvclrkmdtc"));
// console.log(biggerIsGreater("argsnaqbquv"));
// console.log(biggerIsGreater("obbnlkoaklcx"));
// console.log(biggerIsGreater("ojiilqieycsasvqosycu"));
// console.log(biggerIsGreater("qhlgiwsmtxbffjsxt"));
// console.log(biggerIsGreater("vvrvnmndeogyp"));
// console.log(biggerIsGreater("ibeqzyeuvfzb"));
// console.log(biggerIsGreater("sajpyegttujxyx"));
// console.log(biggerIsGreater("zmdjphzogfldlkgbchnt"));
// console.log(biggerIsGreater("tbanvjmwirxx"));
// console.log(biggerIsGreater("gmdhdlmopzyvddeqyjja"));
// console.log(biggerIsGreater("yxvmvedubzcpd"));
// console.log(biggerIsGreater("soygdzhbckfuk"));
// console.log(biggerIsGreater("gkbekyrhcwc"));
// console.log(biggerIsGreater("wevzqpnqwtpfu"));
// console.log(biggerIsGreater("rbobquotbysufwqjeo"));
// console.log(biggerIsGreater("bpgqfwoyntuhkvwo"));
// console.log(biggerIsGreater("schtabphairewhfmp"));
// console.log(biggerIsGreater("rlmrahlisggguykeu"));
// console.log(biggerIsGreater("fjtfrmlqvsekq"));

