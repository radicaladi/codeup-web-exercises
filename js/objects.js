(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // let person = {
    //     firstName: "Adrian",
    //     lastName: "Brown",
    // }
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // let person = {
    //     firstName: "Adrian",
    //     lastName: "Brown",
    //     sayhello: function () {
    //         return "Hello from " + this.firstName + " " + this.lastName + "!";
    //     }
    // }
    //
    // console.log(person.sayhello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // if amount > 200 {return cost = amount * .12}

    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    // console.log(shoppers);

    shoppers.forEach(shopper => {
        console.log(shopper.name + " your total before discount, " + shopper.amount);
        if (shopper.amount > 200) {
            var total = shopper.amount - (shopper.amount * .12);
            console.log(shopper.name + " your total after is, " + total);
        } else {
            console.log(shopper.name + " no discount for you, your total is, " + shopper.amount);
        }
    })

    console.log("-----");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    //function to create an object of 'author' with properties first and last name
    function createAuthor(firstName, lastName) {
        return {
            firstName: firstName,
            lastName: lastName,
        }
    }

    //an array of author objects stored in a variable
    let collectionOfAuthors = [];

    collectionOfAuthors.push(createAuthor('Steven', 'King'));
    collectionOfAuthors.push(createAuthor('James', 'Patterson'));
    collectionOfAuthors.push(createAuthor('John', 'Tolkien'));
    collectionOfAuthors.push(createAuthor('George', 'Martin'));
    collectionOfAuthors.push(createAuthor('Joanne', 'Rowling'));

    console.log(collectionOfAuthors);

    //an array of books, stored in variable 'books', that call on (author) objects from an array stored in another variable.
    let books = [
        {Title: 'Carrie', author: collectionOfAuthors[0]},
        {title: 'Alex Cross', author: collectionOfAuthors[1]},
        {title: 'The Hobbit', author: collectionOfAuthors[2]},
        {title: 'A Game of Thrones', author: collectionOfAuthors[3]},
        {title: 'Harry Potter', author: collectionOfAuthors[4]}
    ]

    console.log(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach((book, index) => {
        console.log(index);
        console.log('title: ' + book.title);
        console.log('author: ' + book.author.firstName + " " + book.author.lastName)
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //I used a createBook function to solve the above TODOs.

})();

/** Class exercises
 * Monday, 6 December 2021
 * */

// Syntax of an object:
// let nameOfObject = {}; empty curly braces. <--- This is the preferred way
// Another way: let nameOfObject = new Object();

//** some examples
// let array = [1, 2, 3, true, false];


// if you have all the information in the beginning for an object, do so in the beginning.
// good common practice.

// let birthdayObject = {
//     month: "February",
//     day: 29,
//     getDetails: function () {
//         return this.month + "," + this.day;
//     } // an object nested within an object.
// } // pass in the birthdayObject into the person below...

// let person = {
//     name: "Clark Kent",
//     birthday: birthdayObject,
//     isTall: true,
// };
// console.log(person);
//
// function createPerson(name) {
//     return {
//         firstname: name,
//         greeting: function () {
//             console.log("Hello, my name is " + this.firstname);
//         }
//     }
// }
//
// let personTwo = createPerson('Bruce');
// let personThree = createPerson('Diana');
// console.log(personTwo);
// console.log(personThree);

//NOTE** You can call specific pieces of information by calling: objectName(dot)attribute(dot)specific data point

// const newPropertyName = "Firstname" //can pass this into the key of the object.
//
// person[newPropertyName] = "Clark Kent"; //can enter key-value pairs in objects dirctly.
// person.birthday = "29, February"; //can assign a property to the object
// person.isTall = true; //use camelCase for objects in js.

// function createDog(breed, color, name) {
//     return {
//         breed: breed,
//         color: color,
//         sex: "M",
//         name: name,
//         isFloofer: false,
//         bark: function (loud) {
//             if (loud) {
//                 console.log("Woof! Woof!")
//             } else {
//                 console.log("Ruf! Ruf!")
//             }
//         },
//         toString: function () {
//             return this.color[3] + " " + this.breed + "named " + this.name;
//         }
//     }
// }
//
// console.log(createDog('German Shepard', 'Black', 'DogMeat'));

// let dog = {
//     breed: "Labrador",
//     colors: ['black', 'brown', 'white', 'chocolate'],
//     sex: "m",
//     name: "Simon",
//     isFloofer: true,
//     bark: function (loud) {
//         if (loud) {
//             console.log("Woof! Woof!")
//         } else {
//             console.log("Ruf! Ruf!")
//         }
//     },
//     toString: function () {
//         return this.color[3] + " " + this.breed + "named " + this.name;
//     }
// };
//
// console.log(dog);

// let collectionOfDogs = [];
//
// collectionOfDogs.push(createDog('German Shepard', 'Black', 'DogMeat'));
// collectionOfDogs.push(createDog('Labrador', 'Chocolate', 'Simon'));
// collectionOfDogs.push(createDog('Mutt', 'Blond', 'Jake'));