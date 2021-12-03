"use strict";

// let i = 2;
// while (i < 131072){
//     console.log("iteration: " + i);
//     i = i + i;
// }

/** Cones exercise and prompt:
 * 5 cones sold... // if there are enough cones
 * Cannot sell you 6 cones, I have only 3... // If there are not enough cones
 * Yay! I sold them all! // If there are no more cones.
 */

/** cones exercise and prompt
* 5 cones sold...  // if there are enough cones
* Cannot sell you 6 cones I only have 3...  // If there are not enough cones
 *Yay! I sold them all! // If there are no more cones
 */

var allCones = Math.floor(Math.random() * 50) + 50; //code to generate random number 50-100.

// let i = 0;
//
console.log(allCones + " Number of cones to sell today.");
//
// do {
//     let conesSold = Math.floor(Math.random() * 5) + 1 //code to generate random number 1-5.
//     i++;
//     console.log("Customer: " + i)
//     console.log("Customer purchase: ", + conesSold);
// } while (i <= allCones );
//     if (i >= allCones){
//         console.log("Sorry. We're sold out.")
//     }

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if (conesToPurchase <= allCones){
        console.log(conesToPurchase + " cones sold...");
        allCones -= conesToPurchase;
    } else {
        console.log("Cannot sell you " + conesToPurchase + " cones, I only have " + allCones + "...");
    }

    console.log(allCones);

} while(allCones > 0);

console.log("Woo! I've sold all the cones!");

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

// let number = 0;
// do {
//     console.log("you're at: ", number);
//     number += 10;
// } while (number <= 50);


// some from memory post-lunch

// let duece = 0;
// do {
//     console.log("these here, ", duece);
//     duece += 2;
// } while (duece <= 10);
//
// while (duece <= 15 && duece > 10){
//     console.log("even more here, ", duece);
//     duece++;
// }

// using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

// let password = 'codeup';
// var enterPW = prompt("Enter your password:", " ");
//
// while (enterPW !== password) {
//     alert("Incorrect password!");
//     enterPW = prompt("Enter your password:", " ");
// } alert("Access granted.")