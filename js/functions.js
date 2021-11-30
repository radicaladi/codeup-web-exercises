"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}
console.log(sayHello("Adrian"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
sayHello("Adrian");
var helloMessage = sayHello("Adrian");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = helloMessage.toString(sayHello);

console.log(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo() {
    return random === 2;
}
console.log(random);
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(Bill, Tip) {
    var total = (Bill * Tip);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line sets result to two digits after decimal point
    total = total.toFixed(2);
    return "Based on your bill, you should tip $" + total + "!";
}

console.log(calculateTip(35, .10));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// function theCheckout () {
//     var bill = prompt("Please enter your bill total here", " ");
//     var tip = prompt("Would you like to tip?", "ex: .20");
//     return alert("this is the amount you will be tipping " + calculateTip(bill, tip));
// }
//
// theCheckout();

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(fullPrice, discountAmt) {
    // var wholePrice = (fullPrice);
    // var discountAmt = .15;
    return "Price to discount, $" + (fullPrice * discountAmt) + ".";
}

applyDiscount();
console.log(applyDiscount(100, .15));

//************** personal bmi calculator experiment

function bmiCalculator(weight, height) {
    //equation here is, bmi = weight(kg) / height(m)^2
    return Math.round(weight/Math.pow(height, 2));
}

var bmi = bmiCalculator(99.7, 1.7);
console.log(bmi);

//************* using prompt and alert in combination with bmi calculator

// function bmiGuiCalc () {
//     var yourWeight = prompt("Enter your weight here", "in kg");
//     var yourHeight = prompt("Enter your height here", "in meters");
//     return alert("Your calculated BMI is, " + bmiCalculator(yourWeight, yourHeight));
// }
//
// bmiGuiCalc(); //seems to work fine. i'd like to streamline the code however.


// ********** 30 NOV CONDITIONALS WARM UP *******

/** Write a function that accepts the top three bowling scores and returns the average.
 * */

const bowler1 = 180;
const bowler2 = 200;
const bowler3 =210;

function getAvg(score1, score2, score3) {
    const total = (score1+score2+score3);
    return (total / 3);
}

const average = getAvg(bowler1, bowler2, bowler3);
console.log(average);

/////

var bowlingGame = ['210', '200', '180']

function bestScore(array) {
    if (Math.max(array) % 3 === 0 || Math.max(array) % 5 === 0 ) {
        return console.log("true");
    } else
        return console.log("false");
}
bestScore(bowlingGame); // Just call the function, no need to console log it in this case.

/////

let bestBowlingPlace = "ThEbEsTbOwLiNgPlAcEever";
function lowercase (source) {
    return source.toLowerCase();
}
console.log(lowercase(bestBowlingPlace));

/////

let score = 109;
let name = "bowling is fun";
let bowlingIsFun = "true";
let players = ['tom', 'jerry', 'garfield'];

function varType (variable) {
    return typeof (variable);
} // console log this one because it is not if/else ?

console.log(varType(score));
console.log(varType(players));
console.log(varType(bowlingIsFun));

/////
/**Write a function that executes all of the above functions
 */

// function execute all ()

/**Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
 */

function myFunction(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(myFunction('adi', 'cooly'));


function thatsNotMyName(name){
if (name === "Laura") {
     return "that's me!" + "I'm ," + "name"
    } else {
         return "that's not my name"
        }
}

console.log(thatsNotMyName("Yoga"));  // this one is if/else but has a return beside true/false.
