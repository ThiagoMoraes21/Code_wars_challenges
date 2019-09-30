/*
    DESCRIPTION

    #Find the missing letter

    Write a method that takes an array of consecutive (increasing) letters 
    as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing.
    The length of the array will always be at least 2.
    The array will always contain letters in only one case.

    Example:
        ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
        ["a","b","c","d","f"] -> "e"
        ["O","Q","R","S"] -> "P"

        (Use the English alphabet with 26 letters!)
 */

// brute force
function findMissingLetter(arr) {
    let res = '';
    for(let i = 0; i < arr.length - 1; i++) {
        if (String.fromCharCode(arr[i].charCodeAt(0) + 1) != arr[i + 1])
            res = String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
    return res;
}

// optmizing
function findMissingLetter_opt(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (String.fromCharCode(arr[i].charCodeAt(0) + 1) != arr[i + 1])
            return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
Test.assertEquals(findMissingLetter_opt(['a','b','c','d','f']), 'e');
Test.assertEquals(findMissingLetter_opt(['O','Q','R','S']), 'P');