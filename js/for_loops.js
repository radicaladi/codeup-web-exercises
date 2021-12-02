"use strict";

// function showMultiplicationTable (input){
//     console.log(input*1);
//     console.log(input*2);
//     console.log(input*3);
//     console.log(input*4);
//     console.log(input*5);
//     console.log(input*6);
//     console.log(input*7);
//     console.log(input*8);
//     console.log(input*9);
//     console.log(input*10);
// }
//
// console.log(showMultiplicationTable(9));


/** Class exercises
 * Thursday, 2 December 2021
 * */

//for loops are used when you know the number of iterations (things to count).

for(let i = 0; i<=15; i+=3){
    console.log("A whole lotta numbers: " + i);
}
//real world example: giving a star for every student who has >90% class grade.


// example with array values that aren't numbers.
let animals = ['cat', 'dog', 'ox', 'horse', 'alligator'];
let i = 0;
while(i<animals.length){
    console.log("Animal with four legs: " + animals[i]);
    i++;
}

