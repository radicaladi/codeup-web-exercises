"use strict";

// * using this kind of call...
// $.get(`http://api.openweathermap.org/data/2.5/weather?lat=${33.748783}&lon=${-84.388168}&appid=${weatherKey}`).done(function (weather) {
//     console.log(weather);
//
//     $(".container").append(`<p>${weather.main.humidity}</p>`);
// })

// * using curriculum...
$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherKey,
    q: "Tucson, US"
}).done(function (data) {
    console.log(data);
});

// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
// }
