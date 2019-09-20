/*
    Given two integers a and b, which can be positive or negative,
    find the sum of all the numbers between including them too and return it.
    If the two numbers are equal return a or b.

    Note: a and b are not ordered!

    Examples
    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

// first solution
function getSum(a, b) {
    const n = a > b ? a - b + 1 : b - a + 1;
    const gauss = ((n / 2) * (a + b));
    return a === b ? a : gauss;
}

// refactoring the same solution
function getSum_refactor(a, b) {
    const min = Math.min(a, b), 
          max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// tests
const Test = {
    assertEquals: (result, expected) => {
        return result === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${result} should be ${expected}`);
    }
}

Test.assertEquals(getSum(0, -1), -1);
Test.assertEquals(getSum(0, 1), 1);
Test.assertEquals(getSum(20, 27), 188);

Test.assertEquals(getSum_refactor(0, -1), -1);
Test.assertEquals(getSum_refactor(0, 1), 1);
Test.assertEquals(getSum_refactor(20, 27), 188);