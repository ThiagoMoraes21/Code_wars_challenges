/*
    DESCRIPTION

    In this kata, you will write a function that returns the positions and the values
    of the "peaks" (or local maxima) of a numeric array.

    For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a
    value of 5 (since arr[3] equals 5).

    The output will be returned as an object with two properties: pos and peaks.
    Both of these properties should be arrays. If there is no peak in the given array,
    then the output should be {pos: [], peaks: []}.

    Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
    (or equivalent in other languages)

    All input arrays will be valid integer arrays (although it could still be empty),
    so you won't need to validate the input.

    The first and last elements of the array will not be considered as peaks
    (in the context of a mathematical function, we don't know what is after and
    before and therefore, we don't know if it is a peak or not).

    Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not.
    In case of a plateau-peak, please only return the position and value of the beginning of
    the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]}
    (or equivalent in other languages)
*/

function pickPeaks(arr) {
    let output = {pos: [], peaks: []};
    let topPeak = arr[0];
    let topPos = 0;
    if(arr.length === 0) return output;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i - 1])
            topPeak = arr[i], topPos = i;
        else if(arr[i] < arr[i - 1])
            if(topPos > 0)
                output.pos.push(topPos),
                output.peaks.push(topPeak),
                topPos = 0;
    }
    return output;
}

function pickPeaks_clever(arr) {
    var result = { pos: [], peaks: [] };
    if (arr.length > 2) {
        var pos = -1;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                pos = i;
            } else if (arr[i] < arr[i - 1] && pos != -1) {
                result.pos.push(pos);
                result.peaks.push(arr[pos]);
                pos = -1;
            }
        }
    }
    return result;
}

// tests 
const Test = {
    assertDeepEquals: (output, expected) => {
        const pos = expected.pos.every((el, index) => el === output.pos[index]);
        const peaks = expected.peaks.every((el, index) => el === output.peaks[index]);
        return pos && peaks && expected.pos.length === output.pos.length && expected.peaks.length === output.peaks.length ?
        console.log('Test passed!') :
        console.log(`Test failed: ${JSON.stringify(output)} should be ${JSON.stringify(expected)}`);
    }
}

Test.assertDeepEquals(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), { pos: [3, 7], peaks: [6, 3] });
Test.assertDeepEquals(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] });
Test.assertDeepEquals(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), { pos: [3, 7, 10], peaks: [6, 3, 2] });
Test.assertDeepEquals(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), { pos: [2, 4], peaks: [3, 2] });
Test.assertDeepEquals(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
Test.assertDeepEquals(pickPeaks([]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks([5]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks([1, 8, 15, 3, 4, 8, 6, 7, 0, 6, 11, -2, 13, 5, 0, 6, 3, 13, 8, 8, 14, 2, 9, -4]), { pos: [2, 5, 7, 10, 12, 15, 17, 20, 22], peaks: [15, 8, 7, 11, 13, 6, 13, 14, 9] });

Test.assertDeepEquals(pickPeaks_clever([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), { pos: [3, 7], peaks: [6, 3] });
Test.assertDeepEquals(pickPeaks_clever([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] });
Test.assertDeepEquals(pickPeaks_clever([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), { pos: [3, 7, 10], peaks: [6, 3, 2] });
Test.assertDeepEquals(pickPeaks_clever([2, 1, 3, 1, 2, 2, 2, 2, 1]), { pos: [2, 4], peaks: [3, 2] });
Test.assertDeepEquals(pickPeaks_clever([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks_clever([2, 1, 3, 2, 2, 2, 2, 5, 6]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks_clever([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
Test.assertDeepEquals(pickPeaks_clever([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
Test.assertDeepEquals(pickPeaks_clever([]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks_clever([1, 1, 1, 1]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks_clever([5]), { pos: [], peaks: [] });
Test.assertDeepEquals(pickPeaks_clever([1, 8, 15, 3, 4, 8, 6, 7, 0, 6, 11, -2, 13, 5, 0, 6, 3, 13, 8, 8, 14, 2, 9, -4]), { pos: [2, 5, 7, 10, 12, 15, 17, 20, 22], peaks: [15, 8, 7, 11, 13, 6, 13, 14, 9] });