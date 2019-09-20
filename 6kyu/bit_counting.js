/*
    DESCRIPTION

    Write a function that takes an integer as input, and returns the number
    of bits that are equal to one in the binary representation of that number. 
    You can guarantee that input is non-negative.

    Example: The binary representation of 1234 is 10011010010,
    so the function should return 5 in this case
*/

// brute force
const countBits = (n) => {
    return n.toString(2).split('').filter(el => el == 1).length;
};

// clever
const countBits_clever = (n) => n.toString(2).split('0').join('').length;

// TESTS
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}


Test.assertEquals(countBits(0), 0);
Test.assertEquals(countBits(4), 1);
Test.assertEquals(countBits(7), 3);
Test.assertEquals(countBits(9), 2);
Test.assertEquals(countBits(10), 2);

Test.assertEquals(countBits_clever(0), 0);
Test.assertEquals(countBits_clever(4), 1);
Test.assertEquals(countBits_clever(7), 3);
Test.assertEquals(countBits_clever(9), 2);
Test.assertEquals(countBits_clever(10), 2);