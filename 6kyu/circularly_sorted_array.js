/*
    DESCRIPTION

    An array is circularly sorted if the elements are sorted in ascending order,
    but displaced, or rotated, by any number of steps.

    Complete the function/method that determines if the given array of integers
    is circularly sorted.

    Examples
    These arrays are circularly sorted (true):
        [2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
        [4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
        [10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
        [1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
        [5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]

    While these are not (false):
        [4, 1, 2, 5]
        [8, 7, 6, 5, 4, 3]
        [6, 7, 4, 8]
        [7, 6, 5, 4, 3, 2, 1]
 */

 // brute force
 function isCircleSorted(arr) {
    let max = Math.max(...arr);
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i], i) <= arr.indexOf(max) || arr[i] === max) arr1.push(arr[i]);
        else arr2.push(arr[i]);
    }

    let concat = arr2.concat(arr1);
    for(let j = 0; j < concat.length; j++) {
        if(concat[j] > concat[j + 1]) return false;
    }
    return true;
 }

// clever solution
function isCircleSorted_clever(arr) {
  let jumped = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      if (jumped) return false;
      jumped = true;
    }
  }
  return true;
}
 
 // tests
const Test = {
    strictEqual: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}
 
Test.strictEqual(isCircleSorted([2, 3, 4, 5, 6]), true);
Test.strictEqual(isCircleSorted([6, 2, 3, 4, 5]), true);
Test.strictEqual(isCircleSorted([2, 3, 4, 5, 0, 1]), true);
Test.strictEqual(isCircleSorted([4, 5, 6, 9, 1]), true);
Test.strictEqual(isCircleSorted([10, 11, 6, 7, 9]), true);
Test.strictEqual(isCircleSorted([1, 2, 3, 4, 5]), true);
Test.strictEqual(isCircleSorted([5, 7, 43, 987, -9, 0]), true);
Test.strictEqual(isCircleSorted([1, 2, 3, 4, 1]), true);

Test.strictEqual(isCircleSorted([3, 2, 4, 5, 6]), false);
Test.strictEqual(isCircleSorted([4, 1, 2, 5]), false);
Test.strictEqual(isCircleSorted([8, 7, 6, 5, 4, 3]), false);
Test.strictEqual(isCircleSorted([6, 7, 4, 8]), false);
Test.strictEqual(isCircleSorted([7, 6, 5, 4, 3, 2, 1]), false);
Test.strictEqual(isCircleSorted([2, 3, 4, 4, 6, 6, -8, -3, 0, 1]), true);

Test.strictEqual(isCircleSorted_clever([2, 3, 4, 5, 6]), true);
Test.strictEqual(isCircleSorted_clever([6, 2, 3, 4, 5]), true);
Test.strictEqual(isCircleSorted_clever([2, 3, 4, 5, 0, 1]), true);
Test.strictEqual(isCircleSorted_clever([4, 5, 6, 9, 1]), true);
Test.strictEqual(isCircleSorted_clever([10, 11, 6, 7, 9]), true);
Test.strictEqual(isCircleSorted_clever([1, 2, 3, 4, 5]), true);
Test.strictEqual(isCircleSorted_clever([5, 7, 43, 987, -9, 0]), true);
Test.strictEqual(isCircleSorted_clever([1, 2, 3, 4, 1]), true);

Test.strictEqual(isCircleSorted_clever([3, 2, 4, 5, 6]), false);
Test.strictEqual(isCircleSorted_clever([4, 1, 2, 5]), false);
Test.strictEqual(isCircleSorted_clever([8, 7, 6, 5, 4, 3]), false);
Test.strictEqual(isCircleSorted_clever([6, 7, 4, 8]), false);
Test.strictEqual(isCircleSorted_clever([7, 6, 5, 4, 3, 2, 1]), false);
Test.strictEqual(isCircleSorted_clever([2, 3, 4, 4, 6, 6, -8, -3, 0, 1]), true);