/*
    DESCRIPTION
    For every good kata idea there seem to be quite a few bad ones!

    In this kata you need to check the provided 2 dimensional array (x)
    for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas,
    return 'Publish!', if there are more than 2 return 'I smell a series!'.
    If there are no good ideas, as is often the case, return 'Fail!'.

    The sub arrays may not be the same length.

    The solution should be case insensitive (ie good, GOOD and gOOd all
    count as a good idea). All inputs may not be strings.
*/

// brute force
function well(x) {
    let goodIdeas = 0;
    for(let i = 0; i < x.length; i++) {
        for(let j = 0; j < x[i].length; j++) {
            let str = x[i][j].toString();
            if(str.toLowerCase() == 'good') goodIdeas++;
        }
    }

    if (goodIdeas == 0) return 'Fail!';
    if (goodIdeas <= 2) return 'Publish!';
    return 'I smell a series!';
}

// clever solution
function well_clever(x) {
    let match = ('' + x).match(/good/gi) || [];
    if (match.length == 0) return 'Fail!';
    if (match.length <= 2) return 'Publish!';
    return 'I smell a series!';
}

// tests 
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
Test.assertEquals(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
Test.assertEquals(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
Test.assertEquals(well([[12, 'bAd', 'BAD', 'asdfasdf', '', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'Publish!');

Test.assertEquals(well_clever([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
Test.assertEquals(well_clever([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
Test.assertEquals(well_clever([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
Test.assertEquals(well_clever([[12, 'bAd', 'BAD', 'asdfasdf', '', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'Publish!');
