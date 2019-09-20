/* 
    DESCRIPTION
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

    Examples:

    Testing: [0, 0, 0, 1] ==> 1
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 0, 1] ==> 5
    Testing: [1, 0, 0, 1] ==> 9
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 1, 0] ==> 6
    Testing: [1, 1, 1, 1] ==> 15
    Testing: [1, 0, 1, 1] ==> 11
    However, the arrays can have varying lengths, not just limited to 4.
*/

// brute force 
function binaryArrayToNumber(arr) {
    let res = 0;
    let bin = arr.reverse();
    for(let i = 0; i <= bin.length - 1; i++) {
        res += bin[i] === 1 ? Math.pow(2, i) : 0;
    }
    return res;
}

// optimizing
function binary_opt(arr) {
    return arr.reverse().reduce((acc, curr, idx) => {
        let temp = curr === 1 ? Math.pow(2, idx) : 0;
        return acc + temp;
    });
}

// clever 
function binary_clever(arr) {
    return parseInt(arr.join(''), 2);
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);

Test.assertEquals(binary_opt([0, 0, 0, 1]), 1);
Test.assertEquals(binary_opt([0, 0, 1, 0]), 2);
Test.assertEquals(binary_opt([1, 1, 1, 1]), 15);
Test.assertEquals(binary_opt([0, 1, 1, 0]), 6);

Test.assertEquals(binary_clever([0, 0, 0, 1]), 1);
Test.assertEquals(binary_clever([0, 0, 1, 0]), 2);
Test.assertEquals(binary_clever([1, 1, 1, 1]), 15);
Test.assertEquals(binary_clever([0, 1, 1, 0]), 6);