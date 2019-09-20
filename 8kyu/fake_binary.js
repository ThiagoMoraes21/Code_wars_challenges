/*
    DESCRIPTION
    Given a string of digits, you should replace any digit below 5 with '0'
    and any digit 5 and above with '1'. Return the resulting string.
*/

// brute force
function fakeBin(str) {
    let res = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= 5) res += 1;
        else res += 0;
    }
    return res;
}

// optimal
function fakeBin_opt(str) {
    return str.split('').map(el => el >= 5 ? 1 : 0).join('');
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}


Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
Test.assertEquals(fakeBin('509321967506747'), '101000111101101');
Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

Test.assertEquals(fakeBin_opt('45385593107843568'), '01011110001100111');
Test.assertEquals(fakeBin_opt('509321967506747'), '101000111101101');
Test.assertEquals(fakeBin_opt('366058562030849490134388085'), '011011110000101010000011011');


