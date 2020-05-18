/*
    The rgb function is incomplete. Complete it so that passing in RGB decimal values will result
    in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
    Any values that fall out of that range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

    The following are examples of expected output values:
        rgb(255, 255, 255) // returns FFFFFF
        rgb(255, 255, 300) // returns FFFFFF
        rgb(0,0,0) // returns 000000
        rgb(148, 0, 211) // returns 9400D3
*/

const rgb = (r, g, b) => {
    let result = "";
    let rgb = [r, g, b];
    const hex = {
        0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6',
        7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
    }
    for(const n of rgb) {
        let color = n > 255 ? 255 : n;
        let first = Math.floor(color / 16);
        let second = Math.floor(color % 16);
        first = first > 15 ? 15 : first < 0 ? 0 : first;
        second = second > 15 ? 15 : second < 0 ? 0 : second;
        result += `${hex[first]}${hex[second]}`;
    }
    return result;
}

const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
            console.log('Test passed!') : console.log(`Test failed: '${output}' should be ${expected}`);
    }
}

Test.assertEquals(rgb(0, 0, 0), '000000')
Test.assertEquals(rgb(0, 0, -20), '000000')
Test.assertEquals(rgb(300,255,255), 'FFFFFF')
Test.assertEquals(rgb(173,255,47), 'ADFF2F')