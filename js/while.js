"use strict";

/** Class exercises
 * Thursday, 2 December 2021
 * */

// while loop example:

// let i = 0; // starting point
// while (i < 10){
//     console.log("iteration: ", i);
//     i++; // this returns +1 to starting point until the statement is false. Which is output < 10 here.
// }

// There are 20 parking spots, 0 open. 1 car driving. Loop until spot opens. iterate the loop.

let parkingSpots = 20;
let parkingTaken = 20;
let parked = false;
let counter = 0;

while (!parked){
    if (parkingSpots === parkingTaken){
        console.log("Parking unavailable.");
        parkingSpots--;
        console.log("Spots taken: ", parkingTaken);
        counter++;
        console.log("Times around: ", counter);
    } else {
        parked = true;
        console.log("You got a parking spot!")
    }
}