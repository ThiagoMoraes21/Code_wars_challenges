/*
    DESCRIPTION
    The goal of this exercise is to convert a string to a new string where
    each character in the new string is "(" if that character appears only
    once in the original string, or ")" if that character appears more than
    once in the original string. Ignore capitalization when determining if a
    character is a duplicate.

    Examples:
        "din"      =>  "((("
        "recede"   =>  "()()()"
        "Success"  =>  ")())())"
        "(( @"     =>  "))((" 
    
    Notes:
        Assertion messages may be unclear about what they display in some languages.
        If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// brute force
function duplicateEncode(word) {
    let arr = word.toLowerCase().split('');
    let duplicates = arr.filter((el, index) => arr.indexOf(el) !== index);
    return arr.map(el => {
        if(duplicates.includes(el)) return ')';
        else return '(';
    }).join('');
}

// optimazed solution
function duplicateEncode_opt(word) {
  return word
    .toLowerCase()
    .split("")
    .map((el, index, arr) => {
      return arr.indexOf(el) == arr.lastIndexOf(el) ? "(" : ")";
    })
    .join("");
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(duplicateEncode("din"), "(((");
Test.assertEquals(duplicateEncode("recede"), "()()()");
Test.assertEquals(duplicateEncode("Success"), ")())())", "should ignore case");
Test.assertEquals(duplicateEncode("(( @"), "))((");
Test.assertEquals(duplicateEncode_opt("din"), "(((");
Test.assertEquals(duplicateEncode_opt("recede"), "()()()");
Test.assertEquals(duplicateEncode_opt("Success"), ")())())", "should ignore case");
Test.assertEquals(duplicateEncode_opt("(( @"), "))((");