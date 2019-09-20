/*
    DESCRIPTION
    You are given a secret message you need to decipher. Here are the things
    you need to know to decipher it:

    For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)
    Note: there are no special characters used, only letters and spaces

    Examples

    decipherThis('72olle 103doo 100ya'); // 'Hello good day'
    decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

// brute force
function decipherThis(str) {
    return str.split(' ').map(el => {   
        // get the first letter
        const char = String.fromCharCode(el.match(/\d/g).join(''));
        const word = [...el.replace(/\d+/g, '')];
        word.unshift(char);

        // switch the second and the last letter
        if(word.length > 2) {
            const second = word[1];
            const last = word[word.length - 1];
            word.splice(1, 1, last);
            word.splice(word.length - 1, 1, second);
        }
        return word.join('');
    }).join(' ');
}; 

// clever solution
function decipherThis_clever(str) {
    return str.split(" ")
            .map(w =>
                w.replace(/^\d+/, c => String.fromCharCode(c))
                .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
            ).join(" ");
}

// TEST
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ? 
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do'); 
Test.assertEquals(decipherThis('72olle 103doo 100ya'), 'Hello good day'); 
Test.assertEquals(decipherThis('82yade 115te 103o'), 'Ready set go'); 

Test.assertEquals(decipherThis_clever('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
Test.assertEquals(decipherThis_clever('72olle 103doo 100ya'), 'Hello good day');
Test.assertEquals(decipherThis_clever('82yade 115te 103o'), 'Ready set go'); 