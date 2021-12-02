"use strict";

/** Class exercises
 * Thursday, 2 December 2021
 * */

//basic syntax of a loop:
// while (condition is true){
//   execute this code;
// }

// while loop example:

// let i = 0; // starting point
// while (i < 10){
//     console.log("iteration: ", i);
//     i++; // this returns +1 to starting point until the statement is false. Which is output < 10 here.
// }

// There are 20 parking spots, 0 open. 1 car driving. Loop until spot opens. iterate the loop.

// let parkingSpots = 20;
// let parkingTaken = 20; //can also use Math.floor(Math.random() * 20) to make it interesting.
// let parked = false;
// let counter = 0;
//
// while (!parked){
//     if (parkingSpots === parkingTaken){
//         console.log("Parking unavailable.");
//         parkingSpots--;
//         console.log("Spots taken: ", parkingTaken);
//         counter++;
//         console.log("Times around: ", counter);
//     } else {
//         parked = true;
//         console.log("You got a parking spot!")
//     }
// }

//***** do while - ALWAYS RUNS CODE FIRST then checks the condition.

// let i = 20;
// do {
//     console.log("i before i++: ", i);
//     i++;
//     console.log("i after i++: ", i);
// } while (i <= 15);

// loop through numbers 0 -> 50 by 2s.

let number = 0;
do {
    console.log("you're at: ", number);
    number += 10;
} while (number <= 50);
