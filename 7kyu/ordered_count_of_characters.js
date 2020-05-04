/*
    DESCRIPTION
    Count the number of occurrences of each character and return it as
    a list of tuples in order of appearance.

    Example:

    orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = (text) => {
    const characters = {};
    const list = [];
    for(const char of text) {
        characters[char] = (characters[char] || 0) + 1
    }
    for(const key in characters) {
        list.push([key, characters[key]]);
    }

    return list;
}