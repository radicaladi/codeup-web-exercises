(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    console.log(planets);

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // planets.unshift("Sun");
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // console.log(planets);
    //
    // planets.push("Pluto");
    // console.log('Adding "Pluto" to the end of the planets array.');
    // console.log(planets);
    //
    // planets.shift("Sun");
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // console.log(planets);
    //
    // planets.pop("Pluto");
    // console.log('Removing "Pluto" from the end of the planets array.');
    // console.log(planets);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // console.log(planets.indexOf("Earth"));
    //
    // planets.reverse();
    // console.log("Reversing the order of the planets array.");
    // console.log(planets);
    //
    // planets.sort();
    // console.log("Sorting the planets array.");
    // console.log(planets);
})();

/** Class exercises
 * Friday, 3 December 2021
 * */

//*** SPREAD OPERATOR NOTES ***

// "..." IS THE SPREAD OPERATOR
// You can add two arrays or remove the brackets from around the array.

var planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];
var numberOfMoons = [0, 0, 1, 2, 79, 82, 27, 14]; //the number of moons each planet has in order, respectively.

// var planetsAndMoons = planets.concat(numberOfMoons);
// var planetsAndMoons = [...planets, ...numberOfMoons];
var planetsAndMoons = numberOfMoons.concat(planets);

console.log(planetsAndMoons);

//merging two arrays in multiple ways. (dot)concat seems to be the easiest way to do so. Least troubleshooting there.