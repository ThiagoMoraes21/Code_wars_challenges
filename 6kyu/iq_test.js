/*
    DESCRITION
    Bob is preparing to pass IQ test. The most frequent task in this test
    is to find out which one of the given numbers differs from the others.
    Bob observed that one number usually differs from the others in evenness.
    Help Bob — to check his answers, he needs a program that among the given
    numbers finds one that is different in evenness, and return a position of this number.

    ! Keep in mind that your task is to help Bob solve a real IQ test, which means
    indexes of the elements start from 1 (not 0)

    ##Examples :
        iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

        iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

*/

// brute force
function iqTest(numbers) {
    let stackOdd = [];
    let stackEven = [];
    let arr = numbers.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) stackEven.push(arr[i]);
        else stackOdd.push(arr[i]);
    }
    return stackEven.length === 1 ? 
        arr.indexOf(stackEven[0]) + 1 : arr.indexOf(stackOdd[0]) + 1;
}


// TESTS
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(iqTest("2 4 7 8 10"), 3);
Test.assertEquals(iqTest("1 2 2"), 1);