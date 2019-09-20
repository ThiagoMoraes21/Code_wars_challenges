/*
    DESCRIPTION

    An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Implement a function that determines whether a string that contains only letters is 
    an isogram. Assume the empty string is an isogram. Ignore letter case.

    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case

*/

// brute force
function isIsogram(str) {
    const arr = str.toLowerCase().split('');
    return arr.every((item, index) => {
        if (arr.indexOf(item) != index) return false;
        else return true;
    })
}

// clever solution
function isIsogramRegex(str) {
    return !/(\w).*\1/i.test(str)
}

// tests
const Test = {
    assertSimilar: (output, expected, message) => {
        return output === expected ? 
        console.log({ test: 'passed' }) : console.log({ test: false, message: message });
    }
}

Test.assertSimilar(isIsogram("Dermatoglyphics"), true);
Test.assertSimilar(isIsogram("isogram"), true);
Test.assertSimilar(isIsogram("aba"), false, "same chars may not be adjacent");
Test.assertSimilar(isIsogram("moOse"), false, "same chars may not be same case");
Test.assertSimilar(isIsogram("isIsogram"), false, "same chars may not be same case");
Test.assertSimilar(isIsogram(""), true, "an empty string is a valid isogram");

Test.assertSimilar(isIsogramRegex("Dermatoglyphics"), true);
Test.assertSimilar(isIsogramRegex("isogram"), true);
Test.assertSimilar(isIsogramRegex("aba"), false, "same chars may not be adjacent");
Test.assertSimilar(isIsogramRegex("moOse"), false, "same chars may not be same case");
Test.assertSimilar(isIsogramRegex("isIsogram"), false, "same chars may not be same case");
Test.assertSimilar(isIsogramRegex(""), true, "an empty string is a valid isogram");