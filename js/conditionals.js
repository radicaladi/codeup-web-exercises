"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     // return color + " is a nice color.";
//     if (color === "red") {
//         return (color + " is my favorite color!");
//     } else {
//         return (color + " " + "is a nice color isn't it?");
//     }
// }
//
// console.log(analyzeColor("orange"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var analyzeColor = prompt("What is your favorite color?");
//
// switch(analyzeColor) {
//     case "Red":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "Blue":
//         alert("That's okay I guess...");
//         break;
//     default:
//         alert(analyzeColor + " isn't my favorite, but it is nice!");
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(color) {
//     var myColor = prompt("What is your favorite color?", " ");
//     // return color + " is a nice color.";
//     if (myColor === "red") {
//         return alert(myColor + " is my favorite color!");
//     } else {
//         return alert(myColor + " " + "is a nice color isn't it?");
//     }
// }
//
// analyzeColor();


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return (totalAmount * 1);
//
//     } else if (luckyNumber === 1) {
//         return (totalAmount - (totalAmount * .10));
//
//     } else if (luckyNumber === 2) {
//         return (totalAmount - (totalAmount * .25));
//
//     } else if (luckyNumber === 3) {
//         return (totalAmount - (totalAmount * .35));
//
//     } else if (luckyNumber === 4) {
//         return (totalAmount - (totalAmount * .50));
//
//     } else if (luckyNumber === 5) {
//         return (0);
//     }
// }
//
// console.log(calculateTotal(4, 100));

//********************** THE BELOW IS SIMILAR BUT NOT EXACTLY WHAT IS BEING ASKED.

// function calculateTotal(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(5);
//     var luckyNumber = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//     if (luckyNumber === 0) {
//         return ("no discount");
//     } else if (luckyNumber === 1) {
//         return ("10% discount")
//     } else if (luckyNumber === 2) {
//         return ("25% discount")
//     } else if (luckyNumber === 3) {
//         return ("35% discount")
//     } else if (luckyNumber === 4) {
//         return ("50% discount")
//     } else if (luckyNumber === 5) {
//         return ("everything is free!")
//     }
// }
// calculateTotal();
// console.log(calculateTotal());
//*********************** END OF SAVED FUNCTION

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// console.log(luckyNumber); // this is to double check results for accuracy.
//
// var whatIsYourBill = prompt("Enter your bill here", " ");
// alert("Your lucky number is, " + luckyNumber);
// if (luckyNumber === 0) {
//     alert("How unlucky! You missed the discount. Sorry");
//     alert ("Your grand total is, $" + calculateTotal(luckyNumber, whatIsYourBill));
//
// } else if (luckyNumber === 1) {
//     alert("You get a 10% discount!");
//     alert ("Your grand total is, $" + calculateTotal(luckyNumber, whatIsYourBill));
//
// } else if (luckyNumber === 2) {
//     alert("You get a 25% discount!");
//     alert ("Your grand total is, $" + calculateTotal(luckyNumber, whatIsYourBill));
// } else if (luckyNumber === 3) {
//     alert("You get a 35% discount!");
//     alert ("Your grand total is, $" + calculateTotal(luckyNumber, whatIsYourBill));
//
// } else if (luckyNumber === 4) {
//     alert("You get a 50% discount!");
//     alert ("Your grand total is, $" + calculateTotal(luckyNumber, whatIsYourBill));
//
// } else if (luckyNumber === 5) {
//     alert("Your lucky day!");
//     alert ("Your item is free!");
//
// }
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var askForNumber = confirm('Would you like to enter a number?');

if (askForNumber) {
    var securedNumber = parseInt(prompt("enter a number", " "));
    if(isNaN(securedNumber)) {
        alert("incorrect input data type!");
    }
    else {
        if (securedNumber % 2 === 0){
            alert("The number is even.");
            alert(securedNumber + " plus 100 is," + " " + (securedNumber+100));
        }
        else {
            alert("The number is odd.");
            alert(securedNumber + " plus 100 is," + " " + (securedNumber+100));
        }
        if (securedNumber < 0) {
            alert ("This number is also negative");
        } else {
            alert("This number is also positive.");
        }
    }
}
// THIS IS THE BEST PIECE OF CODE I HAVE WRITTEN THIS FAR. GLORY GLORY. LOL

// ********** Conditionals class exercise ********
// function weatherClothes (weather){
//     if (weather === "sunny") {
//         console.log("wear shorts");
//     } else if (weather === "rainy") {
//         console.log("wear chinos");
//     } else if (weather === "snowy") {
//         console.log("wear jeans");
//     } else
//         console.log("Good luck to you.");
// }
// weatherClothes("Tornado");

//********** GRADE CONDITIONAL EXERCISE ********

// var osirisGrade = 90;
//
// function gradedStudent (grade) {
//     if (grade >= 90) {
//         console.log("A student");
//     } else if (grade < 90 && grade >= 80) {
//         console.log("B student");
//     } else if (grade < 80 && grade >= 70) {
//         console.log("C student");
//     } else if (grade < 70 && grade >= 60) {
//         console.log("D student");
//     } else
//         return console.log("F student");
// }
//     gradedStudent(osirisGrade);

// let studentGrade = 85
// switch(true) {
//     case studentGrade >= 90:
//         console.log("Ace student")
//         break;
//     case studentGrade <= 90:
//         console.log("Not an A student")
//         break;
// }

//****** SHORTHAND CONDITIONALS w/  RANDOM GENERATOR ********
// var weather = ['sunny', 'overcast', 'rainy', 'snowy', 'ash'];
// var randomWeather = weather[Math.floor(Math.random() * weather.length)];
// console.log(randomWeather);

// randomWeather === "sunny" ? console.log("matches") : console.log("doesn't match");

//******** SWITCH STATEMENTS W/ RANDOM GENERATOR ABOVE ********
// switch (randomWeather) {
//     case "sunny":
//         console.log("wear shorts")
//         break;
//     case "overcast":
//         console.log("wear chinos")
//         break;
//     case "rainy":
//         console.log("wear jeans and raincoat")
//         break;
//     case "snowy":
//         console.log("wear jeans, coat, and boots")
//         break;
//     case "ash":
//         console.log("godspeed")
//         break;
// }
