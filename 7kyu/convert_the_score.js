/*
    DESCRIPTION
    You are working at a lower league football stadium and you've been
    tasked with automating the scoreboard.

    The referee will shout out the score, you have already set up the voice
    recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

    e.g. "The score is four nil" should return [4,0]

    Either teams score has a range of 0-9, and the ref won't say the
    same string every time e.g.

    "new score: two three"
    "two two"
    "Arsenal just conceded another goal, two nil"
    
    Note: Please return an array

*/


// brute force 
function scoreboard(string) {
    const numbers = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return string.split(' ').filter(el => numbers.includes(el)).map(el => numbers.indexOf(el));
}

// tests
const Test = {
    assertSimilar: (output, expected) => {
        return output[0] === expected[0] && output[1] === expected[1] ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should return ${expected}`)
    }
}

Test.assertSimilar(scoreboard("The score is four nil"), [4, 0]);
Test.assertSimilar(scoreboard("new score: two three"), [2, 3]);
Test.assertSimilar(scoreboard("two two"), [2, 2], "Should return: [2,2]");
Test.assertSimilar(scoreboard("Arsenal just conceded another goal, two nil"), [2, 0]);
