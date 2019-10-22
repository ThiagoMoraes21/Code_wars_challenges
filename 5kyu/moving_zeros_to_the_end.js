/*
    DESCRITION

    Write an algorithm that takes an array and moves all of the zeros to the end,
    preserving the order of the other elements.
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]    
*/

function moveZeros(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == 0) arr.splice(arr.indexOf(0), 1), arr.push(0);
    return arr;
}

// tests 
const Test = {
    assertEquals: (output, expected) => {
        return expected.every((el, index) => JSON.stringify(el) == JSON.stringify(output[index])) ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);