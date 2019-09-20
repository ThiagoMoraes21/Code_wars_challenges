// Yor task is to write function factorial

// brute force
function factorial(n) {
    let res = n;
    if(n === 1 || n === 0) return 1;
    while(n > 1) {
        res *= (n - 1);
        n--;
    }
    return res;
}

// refactoring brute force
function factorial_refctoring(n) {
    let res = 1;
    while(n > 0) {
        res *= n;
        n--;
    }
    return res;
}

// clever solution
function factorial_clever(n) {
    return n ? factorial_clever(n - 1) * n : 1;
}


// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(factorial(0), 1);
Test.assertEquals(factorial(1), 1);
Test.assertEquals(factorial(4), 24);
Test.assertEquals(factorial(7), 5040);
Test.assertEquals(factorial(17), 355687428096000);

Test.assertEquals(factorial_clever(0), 1);
Test.assertEquals(factorial_clever(1), 1);
Test.assertEquals(factorial_clever(4), 24);
Test.assertEquals(factorial_clever(7), 5040);
Test.assertEquals(factorial_clever(17), 355687428096000);

Test.assertEquals(factorial_refctoring(0), 1);
Test.assertEquals(factorial_refctoring(1), 1);
Test.assertEquals(factorial_refctoring(4), 24);
Test.assertEquals(factorial_refctoring(7), 5040);
Test.assertEquals(factorial_refctoring(17), 355687428096000);