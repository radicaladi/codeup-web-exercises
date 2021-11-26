var a = 1;
var b = a++;
var c = ++a;

console.log(a, b, c);
// what is the value of a, b, and c? 3, 1, 3

var d = "hello";
var e = false;
d++;
e++;
//NaN 1
console.log(d, e);

var perplexed; // perplexed is undefined (no value is assigned)
//NaN because no valued assigned + a number.
console.log(perplexed + 2);

var price = 2.7;
//2.70
console.log(price.toFixed(2));

// var price = "2.7";
// console.log(price.toFixed(2)) //Not a function

console.log(isNaN(0));
//false

console.log(isNaN(1));
//false

console.log(isNaN(""));
//false

console.log(isNaN("string"));
//true

console.log(isNaN("0"));
//false

console.log(isNaN("1"));
//false

console.log(isNaN("3.145"));
//false

console.log(isNaN(Number.MAX_VALUE));
//false

console.log(isNaN(Infinity));
//false

console.log(isNaN("true"));
//true

console.log(isNaN(true));
//false

console.log(isNaN("false"));
//true

console.log(isNaN(false));
//false

console.log(NaN == NaN);
//false

console.log(!true);
//false

console.log(!false);
//true

console.log(!!true);
//true

console.log(!!false);
//false

console.log(!!0);
//false

console.log(!!-0);
//false

console.log(!!1);
//true

console.log(!!-1);
//true

console.log(!!0.1);
//true

console.log(!!"hello");
//true

console.log(!!"");
//false

console.log(!!'');
//false

console.log(!!"false");
//true

console.log(!!"0");
//true
//******************************** part 2

var sample = "Hello, Codeup";
console.log(sample.length);
console.log(sample.toUpperCase(""));
sample += " Students!";
console.log(sample);
sample = sample.replace(" Students!", " Class!");
console.log(sample);
console.log(sample.indexOf("C"));
//lowercase c doesn't exist so it's -1 but "C" is 7.
var cIndex = sample.indexOf("C");
console.log(sample.substr(cIndex, (sample.indexOf("p") + 1) - cIndex));

//******************************** part 3

//littleMermaid 3 days, littleBear 5 days, theHercules 1 day || $3 per day. How much will you pay?
let daysMermaid = 3;
let daysBear = 5;
let daysHercules = 1;
let costOfMovies = ((daysMermaid * 3) + (daysBear * 3) + (daysHercules * 3));
console.log(costOfMovies);

//Google  400/hr, Amazon 380/hr, Facebook 350/hr. 10hrs Facebook, 6hrs Google, 4hrs Amazon.
// How much will you get paid for the week?

let payGoogle = 400;
let payAmazon = 380;
let payFacebook = 350;
let myWeekWages = ((payGoogle * 6) + (payAmazon * 4) + (payFacebook * 10));
console.log(myWeekWages);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var isNotFull = true;
var doesNotConflict = true;

if (isNotFull && doesNotConflict) {
    console.log("Welcome to class")
} else {
    console.log("Cannot register for class")
}

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var buysMoreThanTwo = true;
var isNotExpired = true;
var ispremiumMember = false;

if (buysMoreThanTwo && isNotExpired || isNotExpired && ispremiumMember) {
    console.log("Discounted stuff is good!")
} else {
    console.log("Offer not valid.")
}


//******************************** part 4

let username = "codeup";
let passWord = "somethingeasilyhacked";

if ((passWord.length > 5) && (passWord.length < 20) && (passWord != username)) {
    console.log("Welcome new user!")
} else {
    console.log("Does not meet criteria.")
}

//******************************** class warmup

let isAtBar = false;
let bac = .00;
let age = 22;
let cashOnHand = 5.99;


let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink && isAtBar) { // true or false
    console.log("Have a brewski my dude!");
} else if (canHaveADrink && !isAtBar) { //if they can buy drink but not at bar
    console.log("Drinks to go for u!");
} else { // it was not true
    console.log("Sorry buddy, no brew for u");
}

//******************************** function exercises

// Its definition has two parameters:
// a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly.
// If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function todayIsAGoodDay(iscloudy, planesScheduled) {

    if (!iscloudy && planesScheduled < 10) {
        console.log("You are clear to fly around the country.");
    } else {
        console.log("Houston we have a problem.");
    }

}

//THE PRACTICE FOR GETTING RETURN OUT OF FUNCTION.

todayIsAGoodDay(false, 10);

function getFullName (firstName, lastName) {
    return firstName + " " + lastName;
}

let fullName = getFullName("Shawn", "Michaels");
console.log(fullName);

//THE FUNCTION PRACTICE FOR ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION, AND REMAINDER

function sum(x, y) {
    return x + y;
}
console.log(sum (3,4));

function difference(x, y) {
    return x - y;
}
console.log(difference (3,4));

function product(x, y) {
    return x * y;
}
console.log(product (3,4));

function dividend(x, y) {
    return x / y;
}
console.log(dividend (22,7));

function remainder(x, y) {
    return x % y;
}
console.log(remainder (14,5));

//LET'S CALCULATE PIE TO TWO DECIMAL PLACES

var numb = dividend(22, 7);
numb = numb.toFixed(2);

console.log(numb);