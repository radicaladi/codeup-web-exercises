(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(this.radius, 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                console.log(Math.round(this.getArea()));
            } else
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

/** Class exercises
 * Tuesday, 7 December 2021
 * */

// console.log(Math.random());
//
// function getArbitraryNumber (min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// function getRandomInt (min, max) {
//     const randomNumber = Math.random() * (max - min) + min
//     console.log("before floor || ceil, ", randomNumber);
//     console.log("after round down, ", Math.floor(randomNumber));
//     console.log("after round up, ", Math.ceil(randomNumber));
//     console.log("after rounding nearest, ", Math.round(randomNumber));
//     return Math.floor(randomNumber);
// }
//
//
// console.log(Math.pow(8, 2)); //this is math.pow to get a value to a power.
// console.log(8 ** 2); //this is shorthand method of coding power of a number.
//
// console.log("the return of pi, ", Math.PI); //will always return pi.
//
// console.log(Math.E); //the base of natural logarithms; like exponential.