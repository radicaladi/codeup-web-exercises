"use strict";

let submittedNumber = 0;

do {
    submittedNumber = Number(prompt("Enter an odd number"));
    //This returns a message and the prompt if value entered is not odd, as a loop.
    if (submittedNumber < 1 || submittedNumber > 50) {
        alert("Operation failed! Need numbers between 1 and 50");
    } else if ((submittedNumber % 2 === 0) /** while true, do the following: */) {
        alert("Odd numbers only!");
    } else {
        alert("Got it!");
        break;
    }
} while (true);

console.log("The number to skip is, " + submittedNumber);
for (var i = 1; i < 100; i += 2) {
    if (i % 2 === 0) {
        // Skip even numbers.
        continue;
    }

    if (i === submittedNumber) {
        console.log("Avoiding! " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
}