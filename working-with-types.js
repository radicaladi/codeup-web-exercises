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

