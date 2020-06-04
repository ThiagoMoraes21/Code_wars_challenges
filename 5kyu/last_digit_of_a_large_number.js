/*
    Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b.
    Note that a and b may be very large!

    For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300),
    which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

    You may assume that the input will always be valid.

    Examples
        lastDigit("4", "1")            // returns 4
        lastDigit("4", "2")            // returns 6
        lastDigit("9", "7")            // returns 9    
        lastDigit("10","10000000000")  // returns 0
*/

const lastDigit = (str1, str2) => {  
    // example 38 ^ 175
    // 1. consider only the last digit of the base, let's say "b" (38 -> 8)
    // 2. find the remainder when power is divided by 4; let's say "r" (175 / 4 -> 43,75)
    // 3. find the last digit of (b ^ r)

    // tip -> to find the reminder of a number when it's divide by 4, simply divide the last
    // two digits of the number by 4.


    const b = str1[str1.length - 1];
    let r = undefined;
    if(str2.length > 2) {
        let temp = str2[str2.length - 2];
        temp += str2[str2.length - 1];
        if(Number(temp) === 0) r = Number(str2);
        else {
            r = Number(temp) % 4;
            if(r === 0) {
                r = 1;
            }
        }
    } else {
        r = Number(str2) % 4;
    }
    const lastDigit = String(Math.pow(b, r));
    return Number(lastDigit[lastDigit.length - 1]);
}


const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}


Test.assertEquals(lastDigit("4", "1"), 4);
Test.assertEquals(lastDigit("4", "2"), 6);
Test.assertEquals(lastDigit("9", "7"), 9);
Test.assertEquals(lastDigit("10","10000000000"), 0);
Test.assertEquals(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
Test.assertEquals(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
  