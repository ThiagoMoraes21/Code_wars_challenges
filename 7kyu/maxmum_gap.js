/*
    DESCRIPTION
    Task:
    Given an array/list [] of integers , Find The maximum difference between
    the successive elements in its sorted form.

    Notes
        - Array/list size is at least 3 .
        - Array/list's numbers Will be mixture of positives and negatives also zeros_
        - Repeatition of numbers in the array/list could occur.
        - The Maximum Gap is computed Regardless the sign.

    ============ Input >> Output Examples =================
    
    // maxGap ({13,10,5,2,9}) ==> return (4)
    Explanation:
        The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
        
    // maxGap ({-3,-27,-4,-2}) ==> return (23)
    Explanation:
        The Maximum Gap after sorting the array is 23 , The difference between |-4- (-27) | = 23 .
        Note: Regardless the sign of negativity.

    // maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
    Explanation:
        The Maximum Gap after sorting the array is 767,
        The difference between | -809- (-42) | = 767.
        Note : Regardless the sign of negativity.

    // maxGap ({-54,37,0,64,640,0,-15}) //return (576)
    Explanation:
        The Maximum Gap after sorting the array is 576,
        The difference between | 64 - 640 | = 576.
        Note : Regardless the sign of negativity.
*/

// brute force
function maxGap(numbers) {
    let arr = numbers.sort((a, b) => b - a );
    let res = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i] - arr[i + 1];
        if(diff > res) res = diff;
    }
    return res;
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(maxGap([13, 10, 2, 9, 5]), 4);
Test.assertEquals(maxGap([13, 3, 5]), 8);
Test.assertEquals(maxGap([24, 299, 131, 14, 26, 25]), 168);
Test.assertEquals(maxGap([-3, -27, -4, -2]), 23);
Test.assertEquals(maxGap([-7, -42, -809, -14, -12]), 767);
Test.assertEquals(maxGap([12, -5, -7, 0, 290]), 278);
Test.assertEquals(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
Test.assertEquals(maxGap([130, 30, 50]), 80);
Test.assertEquals(maxGap([1, 1, 1]), 0);
Test.assertEquals(maxGap([-1, -1, -1]), 0);