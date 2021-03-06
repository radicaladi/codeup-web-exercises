"use strict";

// document.getElementById("heading") //DOM method
//
let header = $("#heading");
let p1 = $("#p-one");
let ulist = $("#list");
let divBg = $(".codeup");

//
// //JQuery methods as follows... ID SELECTORS ***
// let myEL = $('#p-one'); //this is equivalent of getting document by ID.
// console.log(myEL);
// alert(myEL.text());
//
// let header = $('#heading'); // same as above.
// console.log(header);
// alert(header.text());
//
// let valHeading = header.text(); //returns content of whatever you assign it to.
// console.log(valHeading);
// console.log(header.html()); //returns the content of whatever you assign it to but from the html.

// //adding class to 'border' to p tag...
// $('#p-one').addClass('border');

// //ADDING A BORDER TO HEADING IF USER IS LOGGED IN
// //user object as follows,
// let user1 = {
//     name: "Adi",
//     isLoggedIn: true,
//     age: 31,
// }
//
// //check the status of the user...
// let loginStatus = user1.isLoggedIn;
//
// //if user is logged in the header will get a red border...
// if(loginStatus === true){
//     $('#heading').addClass('border');
// }

// //CLASS SELECTORS ***
// //codeup class, multiple elements, border...
// $(".codeup").css("border", "1px solid red");

// //div blue background...
// $("#codeup").css("background-color", "dodgerblue");

// //changing two css properties on one element...
// $("#p-one").css({"color": "red", "font-size": "12px"});


// //ELEMENT SELECTORS ***
//setting font-size li...
// $('li').css("font-size", "20px");

// //highlight h1, p, li...
// $('h1').css("background-color", "rebeccapurple");
// $('p').css("background-color", "rebeccapurple");
// $('li').css("background-color", "rebeccapurple");

//combine highlight h1, p, li...
// $( 'h1, p, li' ).click(function () {
//     $( "h1" ).effect( "highlight" );
//     $( "p" ).effect( "highlight" );
//     $( "li" ).effect( "highlight" );
// })
// alert($('h1').text());

// MOUSE EVENTS ***

//click turn h1 bg blue...
header.click(function () {
    $(this).css("background-color", "blue");
})

//double click turn p 18x...
p1.dblclick(function () {
    $(this).css("font-size", "18px");
})

//hover over turn ul>li red, revert black hover off...
ulist.hover(function () {
    $(this).css("color", "red");
},
    function () {
        $(this).css("color", "inherit");
    })
