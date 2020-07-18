/*
    You are given an array(list) strarr of strings and an integer k. 
    Your task is to return the first longest string consisting of k consecutive strings taken in the array.

    Example:
        longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

    n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

    Note
     consecutive strings : follow one after another without an interruption
*/

const longestConsec = (arr, num) => {
    if(arr.length < num || num <= 0) return '';
    if(arr.length === num) return arr.join('');

    const list = [];
    for(let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for(let j = i, k = 1; k < num; j++, k++) {
            if(arr[j + 1]) str += arr[j + 1]
        }
        list.push(str);
    }

    let largest = "";
    for(let el of list) {
        if(el.length > largest.length) largest = el;
    }

    return largest;
}


// refactoring
const longestConsec_refac = (arr, num) => {
    if(arr.length < num || num <= 0) return '';

    let largest = "";
    for(let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for(let j = i, k = 1; k < num; j++, k++) {
            if(arr[j + 1]) str += arr[j + 1]
        }
        if(str.length > largest.length) largest = str;
    }

    return largest;
}



const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed, ${output} should be ${expected}`);
    }
}

Test.assertEquals(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
Test.assertEquals(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
Test.assertEquals(longestConsec([], 3), "")
Test.assertEquals(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
Test.assertEquals(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
Test.assertEquals(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
Test.assertEquals(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
Test.assertEquals(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
Test.assertEquals(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

Test.assertEquals(longestConsec_refac(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
Test.assertEquals(longestConsec_refac(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
Test.assertEquals(longestConsec_refac([], 3), "")
Test.assertEquals(longestConsec_refac(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
Test.assertEquals(longestConsec_refac(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
Test.assertEquals(longestConsec_refac(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
Test.assertEquals(longestConsec_refac(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
Test.assertEquals(longestConsec_refac(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
Test.assertEquals(longestConsec_refac(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")