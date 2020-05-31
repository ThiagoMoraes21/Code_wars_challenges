/*
    DESCRIPTION
    Background:
    You're working in a number zoo, and it seems that one of the numbers has gone missing!

    Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

    In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

    Task:
    Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n).
    Return this missing number.

    Note: huge lists will be tested.

    Examples:
        [1, 3, 4]  =>  2
        [1, 2, 3]  =>  4
        [4, 2, 3]  =>  1
*/

// O(n log(n))
const findNumber = array => {
    const sortedArr = array.sort((a, b) => a - b);
    if (sortedArr[0] !== 1) return 1;
    if (sortedArr[1] === undefined) return 2;
    for (let i = 1; i < sortedArr.length; i++) {
        if ((sortedArr[i] - 1) !== sortedArr[i - 1]) return sortedArr[i] - 1;
        if ((sortedArr[i] + 1) !== sortedArr[i + 1]) return sortedArr[i] + 1;
    }
}

const findNumber_2 = array => {
    const obj = {};
    for(const el of array) obj[el] = el;
    if(!obj['1']) return 1;
    for(const key in obj) {
        if(!obj[Number(key) + 1]) return Number(key) + 1;
    }
}

// FASTEST
const findNumber_3 = array => {
    const set = new Set(array);
    for(let i = 0; i <= array.length; i++) {
        if(!set.has(i + 1)) return i + 1;
    }
}

const assert = {
    equal: (output, expected) => {
        return output === expected ?
            console.log('Test passed!') : console.log(`Test failed, ${output} should be ${expected}`);
    }
}

assert.equal(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
assert.equal(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
assert.equal(findNumber([1, 2, 3, 5]), 4);
assert.equal(findNumber([1, 3]), 2);
assert.equal(findNumber([2, 3, 4]), 1);
assert.equal(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
assert.equal(findNumber([1, 2, 3]), 4);
assert.equal(findNumber([1]), 2);

assert.equal(findNumber_2([1, 3, 4, 5, 6, 7, 8]), 2);
assert.equal(findNumber_2([7, 8, 1, 2, 4, 5, 6]), 3);
assert.equal(findNumber_2([1, 2, 3, 5]), 4);
assert.equal(findNumber_2([1, 3]), 2);
assert.equal(findNumber_2([2, 3, 4]), 1);
assert.equal(findNumber_2([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
assert.equal(findNumber_2([1, 2, 3]), 4);
assert.equal(findNumber_2([1]), 2);

assert.equal(findNumber_3([1, 3, 4, 5, 6, 7, 8]), 2);
assert.equal(findNumber_3([7, 8, 1, 2, 4, 5, 6]), 3);
assert.equal(findNumber_3([1, 2, 3, 5]), 4);
assert.equal(findNumber_3([1, 3]), 2);
assert.equal(findNumber_3([2, 3, 4]), 1);
assert.equal(findNumber_3([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
assert.equal(findNumber_3([1, 2, 3]), 4);
assert.equal(findNumber_3([1]), 2);