/*
    DESCRIPTION

    In this example you have to validate if a user input string is alphanumeric.
    The given string is not nil/null/NULL/None, so you don't have to check that.

    The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore
*/


function alphanumeric(string) {
    let wp = /\s+/;
    let sc = /[!\ˆ$.|?*+()_]/;
    if (string.length > 0 && !wp.test(string) && !sc.test(string)) return true;
    else return false;
}

function alphanumeric_opt(string) {
    let whitespaces = /\s+/;
    let specialChar = /[!\ˆ$.|?*+()_]/;
    return string.length > 0 && !whitespaces.test(string) && !specialChar.test(string);
}

function alphanumeric_clever(string) {
    return /^[a-z\d]+$/i.test(string);
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(alphanumeric("Mazinkaiser"), true)
Test.assertEquals(alphanumeric("hello world_"), false)
Test.assertEquals(alphanumeric("PassW0rd"), true)
Test.assertEquals(alphanumeric("     "), false)
Test.assertEquals(alphanumeric(""), false)
Test.assertEquals(alphanumeric("qGkprJjPImF94JHdE_EK4BO3"), false)

Test.assertEquals(alphanumeric_opt("Mazinkaiser"), true)
Test.assertEquals(alphanumeric_opt("hello world_"), false)
Test.assertEquals(alphanumeric_opt("PassW0rd"), true)
Test.assertEquals(alphanumeric_opt("     "), false)
Test.assertEquals(alphanumeric_opt(""), false)
Test.assertEquals(alphanumeric_opt("qGkprJjPImF94JHdE_EK4BO3"), false)

Test.assertEquals(alphanumeric_clever("Mazinkaiser"), true)
Test.assertEquals(alphanumeric_clever("hello world_"), false)
Test.assertEquals(alphanumeric_clever("PassW0rd"), true)
Test.assertEquals(alphanumeric_clever("     "), false)
Test.assertEquals(alphanumeric_clever(""), false)
Test.assertEquals(alphanumeric_clever("qGkprJjPImF94JHdE_EK4BO3"), false)