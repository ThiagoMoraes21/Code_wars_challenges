/*
    Welcome. In this kata, you are asked to square every digit of a number.

    For example, if we run 9119 through the function, 811181 will come out,
    because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer
*/

// brute force
function squareDigits(num) {
    let arr = JSON.stringify(num).split('');
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let square = Math.pow(JSON.parse(arr[i]), 2);
        res[i] = square;
    }
    return parseInt(res.join(''));
}

// clever solution
function squareDigits_clever(num){
    return Number((
        num
        .toString()
        .split('')
        .map(el => Math.pow(parseInt(el), 2))
        .join('')
    ));
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(squareDigits(9119), 811181);
Test.assertEquals(squareDigits_clever(9119), 811181);