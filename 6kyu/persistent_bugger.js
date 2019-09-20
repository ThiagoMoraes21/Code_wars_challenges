/*
    DESCRIPTION
    Write a function, persistence, that takes in a positive parameter
    num and returns its multiplicative persistence, which is the number
    of times you must multiply the digits in num until you reach a single digit.

    For example:

    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                        // and 4 has only one digit

    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                            // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number

*/

// brute force
function persistence(num) {
    let arr = num.toString().split('');
    let n = num;
    let res = 0;
    while(n > 9) {  
        n = arr.reduce((acc, curr) => acc *= curr);
        arr = n.toString().split('');
        res++;
    }
    return res;
}

// optimaze solution
function persistence_opt(num) {
   let times = 0;
   num = num.toString();
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return times;
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(persistence(39), 3);
Test.assertEquals(persistence(4), 0);
Test.assertEquals(persistence(25), 2);
Test.assertEquals(persistence(999), 4);
Test.assertEquals(persistence_opt(39), 3);
Test.assertEquals(persistence_opt(4), 0);
Test.assertEquals(persistence_opt(25), 2);
Test.assertEquals(persistence_opt(999), 4);