/*
    Count the number of Duplicates
    
    Write a function that will return the count of distinct case-insensitive
    alphabetic characters and numeric digits that occur more than once in the input string.
    The input string can be assumed to contain only alphabets (both uppercase and lowercase)
    and numeric digits.

    Example
        "abcde" -> 0 # no characters repeats more than once
        "aabbcde" -> 2 # 'a' and 'b'
        "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
        "indivisibility" -> 1 # 'i' occurs six times
        "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
        "aA11" -> 2 # 'a' and '1'
        "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const duplicateCount = (str) => {
    const obj1 = {};
    let count = 0;

    for(const s of str) {
        const char = s.toLowerCase();
        obj1[char] = (obj1[char] || 0) + 1;
        if(obj1[char] === 2) count++;
    }

    return count;
} 


const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2); // "should ignore case"
Test.assertEquals(duplicateCount("Indivisibility"), 1);
Test.assertEquals(duplicateCount("Indivisibilities"), 2); // "characters may not be adjacent"