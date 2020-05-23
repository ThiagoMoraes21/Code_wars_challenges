/*
    Everything is in the question...
    You have to write a function howManyPalindromes which

    will receive a string as parameter
    should return an integer representing the amount of palindromes found in the string.
    This is pretty standard and few kata are somewhat similar to this one.
    the real difference here is that your function must be very quick.

    Each testcase will assert on the returned int as well as the time it took to compute the palindromes.
    If your function take more than 2000ms then the test will fail.

    Examples:
        howManyPalindromes('aaa'); // 6 ('a', 'a', 'a', 'aa', 'aa', 'aaa')
        howManyPalindromes('abccba'); // 9 ('a', 'a', 'b', 'b', 'c', 'c', 'cc', 'bccb', 'abccba')
        abccba -> a, ab, abc, abcc, abccb, abccba, b, bc, bcc, bccb, bccba, c, cc, ccb, ccba, c, cb, cba, b, ba, a
*/

// SLOW...
// const howManyPalindromes = str => {
//     let result = 0;
//     let conc = "";
//     for(let i = 0; i < str.length; i++, result++) {
//         conc = str[i];
//         for(let j = i + 1; j < str.length; j++) {
//             if(isPalindrome(conc += str[j])) result++;
//         }
//         conc = "";
//     }
//     return result;
// }

// const isPalindrome = str => {
//     for(let i = 0; i < str.length / 2; i++) {
//         if(str[i] !== str[str.length - 1 - i]) return false;
//     }
//     return true;
// }


// fast enough
const howManyPalindromes = s => {
    counts = s.length
    if (s[0].repeat(s.length) == s)
        return s.length * (s.length + 1) / 2
    for (i = 2; i <= s.length; i++)
        for (j = 0; j <= s.length - i; j++) {
            counts++
            for (k = 0; k < i / 2; k++)
                if (s[j + k] != s[j + i - k - 1]) {
                    counts--
                    break
                }
        }
    return counts
}



const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed, ${output} should be ${expected}`);
    }
}

Test.assertEquals(howManyPalindromes('aaa'), 6);
Test.assertEquals(howManyPalindromes('abccba'), 9);
Test.assertEquals(howManyPalindromes('feetea'), 8);



/*
    sources: 
        https://cp-algorithms.com/string/string-hashing.html
        https://cp-algorithms.com/string/manacher.html
*/