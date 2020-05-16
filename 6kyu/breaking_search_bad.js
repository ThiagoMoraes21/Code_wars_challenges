/*
    The function must return the sequence of titles that match the string passed as an argument.

    TITLES is a preloaded sequence of strings.

    TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
        search('ock') --> ['Rocky 1', 'Rocky 2']
        But the function return some weird result and skip some of the matching results.

    Does the function have special movie taste?

    Let's figure out !
*/

const searchTest = (searchTerm) => {
    const TITLES = ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']
    const result = [];
    for(const title of TITLES) {
        const temp = title.toLowerCase();
        if(temp.includes(searchTerm.toLowerCase())) result.push(title);
    }
    return result;
}

const search = (searchTerm) => {
    const TITLES = ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']
    const search = new RegExp(searchTerm, 'i');
    return TITLES.filter(title => {
      return search.test(title);
    });
  }


const Test = {
    assertSimilar: (output, expected) => {
        console.log('OUTPUT: ', output, ' | ', 'EXPECTED: ', expected);
        set1 = new Set(output);
        expected.forEach(v => {
            return set1.has(v) ?
                console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
        });
    }
}

Test.assertSimilar(search('ho'), ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']);