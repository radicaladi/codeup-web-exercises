"use strict";

// let chosenNumber = prompt("Choose an odd number.", " ");
// for (let i = 1; i < 50; i++) {
//     if (i % 2 === 0) {
//         // Skip even numbers.
//         continue;
//     }
//
//     if (chosenNumber === i) {
//         console.log("Avoid! Skipping number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
//
//     if (i >= 49) {
//         break;
//     }
// }

let submittedNumber = Number(prompt("Enter an odd number"));

while (submittedNumber % 2 === 0) /** while true, do the following: */ {
    //This returns a message and the prompt if value entered is not odd, as a loop.
    alert("Odd numbers only!");
    submittedNumber = prompt("Enter an odd number");
}
alert("The number to skip is, " + submittedNumber);

for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        // Skip even numbers.
        continue;
    }

    if (submittedNumber === i) {
        console.log("Avoiding! " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i >= 49) {
        break;
    }
}