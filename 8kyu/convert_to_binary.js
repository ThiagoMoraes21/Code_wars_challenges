/*
    DESCRIPTION

    Given a non-negative integer n, write a function toBinary/ToBinary
    which returns that number in a binary format.

    Example:
    to_binary(1)  // should return 1
    to_binary(5)  // should return 101
    to_binary(11) // should return 1011
*/

// brute force
function toBinary(n) {
    let res = "";
    while(n > 0) {
        res += n % 2;
        n = Math.floor(n / 2);
    }
    return Number(res.split('').reverse().join(''));
}

// optimal 
function toBinary_opt(n) {
    return parseInt(n.toString(2));
}

// tests 
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ? 
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(toBinary(1), 1);
Test.assertEquals(toBinary(2), 10);
Test.assertEquals(toBinary(3), 11);
Test.assertEquals(toBinary(5), 101);

Test.assertEquals(toBinary_opt(1), 1);
Test.assertEquals(toBinary_opt(2), 10);
Test.assertEquals(toBinary_opt(3), 11);
Test.assertEquals(toBinary_opt(5), 101);