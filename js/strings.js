var myName = "Adrian.";
var aSentence = "Hi my name is, " + myName;
var aboutSelf = "\n\tI have a strong desire to learn how to program code.\n";
var enjoyThis = "\t\tI also enjoy drinking tea.";

aSentence += aboutSelf += enjoyThis;

console.log(aSentence);

//********* reverseString warmup below

let stringReversing = "nintendo";

let reverseString = [...stringReversing].reverse().join("");
console.log(reverseString);

//**** THE BELOW IS A LONGER WAY OF DOING THE ABOVE.
// let splitString = stringReversing.split("")
// console.log(splitString);
//
// let reverseString = splitString.reverse();
// console.log(reverseString);
//
// let joinString = reverseString.join("");
// console.log(joinString);

//******** end warmup