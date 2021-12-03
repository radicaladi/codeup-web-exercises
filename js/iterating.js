(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Ric', 'Kevin', 'Shawn', 'Scott'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for( let i = 0; i < names.length; i++){
    //     console.log("A name of a WWF legend is, " + names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function (names){
    //     console.log("Here is a name of a WWF legend: " + names);
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // let thisArray = [1, 2, 3, 4, 5];
    //
    // function one (input){
    //     return thisArray[input];
    // }
    // console.log(one(0));
    //
    // function two (input){
    //     return thisArray[input];
    // }
    // console.log(two(1));
    //
    // function three (input){
    //     return thisArray[input];
    // }
    // console.log(three(4));

})();


/** Class exercises
 * Friday, 3 December 2021
 * */

//***NOTES***
    //When ACCESSING an element IN an Array:
    // nameOfArray[position within array] -- reminder! Arrays ALWAYS start @ ZERO.

//***END NOTES*****


// FUNCTIONS ****

//Creat an array of top 5 fav foods.

// let myFavFoods = ['chili-dogs', 'japchae', 'ramen', 'tacos', 'tortas'];
// console.log(myFavFoods);
// console.log(myFavFoods[0]);

//concatenate the last name and first name
//access a name(array above) value
//re-assign that value to equal name + last name

// console.log(names[3]);
// names[3] = names[3] + " hall";
// console.log(names[3]);

//using above method
//add ratings to fav foods

// console.log(myFavFoods[1]); //japchae
// myFavFoods[1] = myFavFoods[1] + " rated 8";
// console.log(myFavFoods[1]);

// let adi = ['Adrian', 31, 'Phoenix', 'mac', ['chili-dog', 'japchae', 'ramen'], 2021]
// let age = adi[1];
// console.log(age);
// let innerArr = adi[4]; //all withing the inner array equates position of index.
// console.log(innerArr); //this calls the array in an array
// console.log(innerArr[1]); // because innerArr was assigned to that array. Pulling index 1.
// console.log(adi[4][2]); //alternate way to access index of array within array.
//
// function desiredAge (num){
//     return num - 3;
// }
//this accesses the array by calling
//the variable with stored array value
//and applying it to function and running the code within.
//con-logging the process to return result
// console.log(desiredAge(age));

// function nameOfFunction (num1, randomFunction) {
//     randomFunction();
//     return num1;
// }
//
// console.log(nameOfFunction(4, function () {
//     console.log("hey there!");
// }))

//The above function calls a function as a parameter of another function. Returning a value
//and the contents of another function from elsewhere.

// METHODS *****

//**NOTES**
// Methods are just pre-existing functions
// such as "Math.random()" || "Math.floor()" || parseInt() || console.log()
// they typically have a punkt involved.

//*** END NOTES ***

let ages = [19, 23, 27, 31];

for(let i = 0; i <= ages.length - 1; i++) {
    console.log(ages[i] * 2);
}
//remember! In this case of using a loop to modify the elements of an array
//you must use i as the element in the array when calling
//in order to get the loop to cycle through the positions of the array.
//i will start are array element 0, cycle through, until end. because i <= array.length -1, it'll stop at end.