/*
    DESCRIPTION
    Your task is to determine how many files of the copy queue 
    you will be able to save into your Hard Disk Drive.

    Input:
        Array of file sizes (0 <= s <= 100)
        Capacity of the HD (0 <= c <= 500)

    Output:
        Number of files that can be fully saved in the HD

    Examples:
        save([4,4,4,3,3], 12) -> 3
        # 4+4+4 <= 12, but 4+4+4+3 > 12
        save([4,4,4,3,3], 11) -> 2
        # 4+4 <= 11, but 4+4+4 > 11
    ** Do not expect any negative or invalid inputs.

*/

// brute force
function save(sizes, hd) {
    let count = 0;
    return sizes.filter(el => {
        count += el;
        if (count <= hd) return true;
    }).length;
}

// good practice
function _save(sizes, hd) {
    let i = -1;
    while (hd >= 0) {
        hd -= sizes.shift();
        i++;
    }
    return i;
}

// test 
const Test = {
    strictEqual: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.strictEqual(save([4, 4, 4, 3, 3], 12), 3);
Test.strictEqual(save([4, 4, 4, 3, 3], 11), 2);
Test.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6);
Test.strictEqual(save([13], 13), 1);
Test.strictEqual(save([1, 2, 3, 4], 250), 4);
Test.strictEqual(save([100], 500), 1);
Test.strictEqual(save([11, 13, 15, 17, 19], 8), 0);
Test.strictEqual(save([45], 12), 0);
Test.strictEqual(save([0, 0, 2, 11, 20, 7, 11, 7, 0, 15, 7, 1, 19, 7, 10, 5, 0, 12, 10, 20, 13, 11, 17, 6, 0], 25), 4);
Test.strictEqual(save([0, 11, 10, 2, 6, 12, 0, 4, 0, 15, 5, 3, 8, 9, 1, 14, 11, 7, 1, 0, 5, 11, 1, 14, 6, 4, 10, 2, 17, 0, 19, 15, 14, 9, 8, 4, 7, 9, 2, 3, 20, 18, 1, 9, 6, 3], 45), 9);

Test.strictEqual(_save([4, 4, 4, 3, 3], 12), 3);
Test.strictEqual(_save([4, 4, 4, 3, 3], 11), 2);
Test.strictEqual(_save([4, 8, 15, 16, 23, 42], 108), 6);
Test.strictEqual(_save([13], 13), 1);
Test.strictEqual(_save([1, 2, 3, 4], 250), 4);
Test.strictEqual(_save([100], 500), 1);
Test.strictEqual(_save([11, 13, 15, 17, 19], 8), 0);
Test.strictEqual(_save([45], 12), 0);
Test.strictEqual(_save([0, 0, 2, 11, 20, 7, 11, 7, 0, 15, 7, 1, 19, 7, 10, 5, 0, 12, 10, 20, 13, 11, 17, 6, 0], 25), 4);
Test.strictEqual(_save([0, 11, 10, 2, 6, 12, 0, 4, 0, 15, 5, 3, 8, 9, 1, 14, 11, 7, 1, 0, 5, 11, 1, 14, 6, 4, 10, 2, 17, 0, 19, 15, 14, 9, 8, 4, 7, 9, 2, 3, 20, 18, 1, 9, 6, 3], 45), 9);