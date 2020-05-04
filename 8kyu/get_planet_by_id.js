/*
    DESCRIPTION
    The function is not returning the correct values. Can you figure out why?

    getPlanetName(3); // should return 'Earth'
*/

const getPlanetName = id => {
    let name;
    switch(id) {
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    return name;
}

const getPlanetName_optimal = id => {
    const planets = {
        '1': 'Mercury',
        '2': 'Venus',
        '3': 'Earth',
        '4': 'Mars',
        '5': 'Jupiter',
        '6': 'Saturn',
        '7': 'Uranus',
        '8': 'Neptune',
    }
    return planets[id];
}

const Test = {
    assertEquals: (output, expected) => {
        output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(getPlanetName(2), 'Venus');
Test.assertEquals(getPlanetName(5), 'Jupiter');
Test.assertEquals(getPlanetName(3), 'Earth');

Test.assertEquals(getPlanetName_optimal(2), 'Venus');
Test.assertEquals(getPlanetName_optimal(5), 'Jupiter');
Test.assertEquals(getPlanetName_optimal(3), 'Earth');