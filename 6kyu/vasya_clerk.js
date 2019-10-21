/*
    DESCRIPTION

    The new "Avengers" movie has just been released! There are a lot
    of people at the cinema box office standing in a huge line.
    Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

    Vasya is currently working as a clerk. He wants to sell a ticket to every single
    person in this line.

    Can Vasya sell a ticket to every person and give change if he initially has no
    money and sells the tickets strictly in the order people queue?

    Return YES, if Vasya can sell a ticket to every person and give change with
    the bills he has at hand at that moment. Otherwise return NO.

    Examples:
        tickets([25, 25, 50]) // => YES
        tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
        tickets([25, 25, 50, 50, 100]) // => NO. 
            Vasya will not have the right bills to give 75 dollars of change
            (you can't make two bills of 25 from one of 50)
 */

// brute force
// function tickets(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log('value: ', arr[i], '  | total: ', total);
//         if (arr[i] == 25) total += arr[i];
//         else if(total >= (arr[i] - 25)) total += 25;
//         else return res = 'NO';
//     }
//     return 'YES';
// }

// brute force
function tickets(arr) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 25) total.push(arr[i]);
        else if(arr[i] == 50 && total.includes(25)) 
            total.splice(total.indexOf(25), 1, arr[i]);
        else if(arr[i] == 100 && total.includes(25) && total.includes(50)) {
            total.splice(total.indexOf(25), 1);
            total.splice(total.indexOf(50), 1, arr[i]);
        }
        else if (arr[i] == 100 && total.filter(el => el == 25).length == 3) {
            let temp = 0;
            let tempArr = [...total];
            tempArr.forEach(el => {
                if(el == 25 && temp <= 3) {
                    total.splice(total.indexOf(el), 1);
                    temp++;
                };
            });
            total.push(arr[i]);
        }
        else return 'NO';
    }
    return 'YES';
}

// tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
Test.assertEquals(tickets([25, 100]), "NO");
Test.assertEquals(tickets([25, 25, 50]), "YES");
Test.assertEquals(tickets([25, 25, 50, 50, 100]), "NO");
Test.assertEquals(tickets([25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100]), "YES");
Test.assertEquals(tickets([25,50,25,100,25,50,25,100,25,50,25,100,25,25,25,100,25,25,50,100]), "YES");
Test.assertEquals(tickets([25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100]), "YES");