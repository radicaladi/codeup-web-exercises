"use strict";

//NOTES:
// for loops are used when you know the number of iterations (things to count).
// loop syntax: 1) starting point. 2) condition. 3) how to iterate.

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
// showMultiplicationTable(9);


// for(let i = 0; i < 10; i++){
//     let luckyNumber = Math.floor(Math.random() * 200);
//     if (luckyNumber % 2 === 0){
//         console.log("The number, " + luckyNumber + " is even.")
//     } else {
//         console.log("The number, " + luckyNumber + " is odd.")
//     }
// }

// let rows = 9
// let spaces = '';
//
// for (let i = 1; i <= rows; i++){
//     for (let j = 1; j <= i; j++) {
//         spaces += i;
//     }
//     console.log(spaces);
//     spaces = '';
// }



/** Class exercises
 * Thursday, 2 December 2021
 * */


////////// FOR LOOPS CLASS EXERCISES

// for(let i = 0; i<=15; i+=3){
//     console.log("A whole lotta numbers: " + i);
// }
//real world example: giving a star for every student who has >90% class grade.


// example with array where values that aren't numbers.
// let animals = ['cat', 'dog', 'ox', 'horse', 'alligator'];
// let i = 0;
// while(i<animals.length){
//     console.log("Animal with four legs: " + animals[i]);
//     i++;
// }

////////// dozen eggs exercise

// let dozens = 0;
// for (let eggs = 1; eggs <= 48; eggs++){
//     if(eggs % 12 === 0){
//         dozens++;
//     }
//     // dozens = eggs/12;
//     console.log("dozens: ", dozens);
//     console.log("eggs :", eggs);
// }
// let dozens = 0;
// for (let eggs = 0; eggs <= 4; eggs++){
//     dozens= eggs * 12;
//     console.log("dozens : ", eggs);
//     console.log("eggs ", dozens);
// }

////////// NESTED FOR LOOPS CLASS EXERCISES

// for(let counter =1; counter <= 5; counter++){
//     console.log('FIRST counter: ' + counter);
//     //counts from 5 to 1.
//
//     for(let counterTwo = 5; counterTwo > 0; counterTwo--) {
//         console.log('SECOND counter: ' + counterTwo);
//     } //counts from 5 to 1 inside of first counter 5, 4, 3, 2, 1.
// }
///IMPORTANT NOTE: This code runs like a workout:
// Outer counter is counting sets. Inner counter is counting the reps in the sets.

