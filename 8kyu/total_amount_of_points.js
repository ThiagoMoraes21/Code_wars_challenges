/*
    DESCRIPTION
    Our football team finished the championship. The result of each match look like "x:y".
    Results of all matches are recorded in the collection.

    For example: ["3:1", "2:2", "0:1", ...]

    Write a function that takes such collection and counts the points of our team
    in the championship. Rules for counting points for each match:

    if x>y - 3 points
    if x<y - 0 point
    if x=y - 1 point
    Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/

// O(n)
const points = (arr) => {
    let finalPoints = 0;
    for(let i = 0; i < arr.length; i++) {
        let x = Number(arr[i].split(':')[0])
        let y = Number(arr[i].split(':')[1])
        if(x > y) finalPoints += 3;
        if(x === y) finalPoints++;
    }
    return finalPoints;
}


// tests 
const Test = {
    assertEquals: (output, expected) => {
        output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);