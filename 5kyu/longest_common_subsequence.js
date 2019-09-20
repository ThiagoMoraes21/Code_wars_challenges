/*
    DESCRIPTION

    Write a function called LCS that accepts two sequences and returns the
    longest subsequence common to the passed in sequences.

    Subsequence:
    A subsequence is different from a substring. The terms of a subsequence
    need not be consecutive terms of the original sequence.

    Example subsequence:
        Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

    LCS examples:
        LCS( "abcdef" , "abc" ) => returns "abc"
        LCS( "abcdef" , "acf" ) => returns "acf"
        LCS( "132535365" , "123456789" ) => returns "12356"
    
    Notes:
        Both arguments will be strings
        Return value must be a string
        Return an empty string if there exists no common subsequence
        Both arguments will have one or more characters (in JavaScript)
        All tests will only have a single longest common subsequence. Don't worry about
        cases such as LCS( "1234", "3412" ), which would have two possible longest common 
        subsequences: "12" and "34".
*/

// Complexity: O(MN)
function LCS(x, y) {
    let res = [];
    for(let i = -1; i < x.length; i++) {
        res[i] = [];
        for(let j = -1; j < y.length; j++) {
            if(i === -1 || j === -1) {
                res[i][j] = 0;
            } else if (x[i] === y[j]) {
                res[i][j] = res[i - 1][j - 1] + 1;
            } else {
                res[i][j] = Math.max(res[i - 1][j], res[i][j - 1]);
            }
        }
    }
    console.log(res);
    return res;
}


// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

// Test.assertEquals(LCS("a", "b"), "");
Test.assertEquals(LCS("abcdef", "abc"), "abc");
// Test.assertEquals(LCS( "abcdef" , "abc" ), "abc");
// Test.assertEquals(LCS( "abcdef" , "acf" ), "acf");
// Test.assertEquals(LCS( "132535365" , "123456789"), "12356");
// Test.assertEquals(LCS("BACBAD", "ABAZDC"), "ABAD");
// Test.assertEquals(LCS("GXTXAYB", "AGGTAB"), "GTAB");
// Test.assertEquals(LCS("aaaa", "aa"), "aa");