"use strict";

// * using this kind of call...
// $.get(`http://api.openweathermap.org/data/2.5/weather?lat=${33.748783}&lon=${-84.388168}&appid=${weatherKey}`).done(function (weather) {
//     console.log(weather);
//
//     $(".container").append(`<p>${weather.main.humidity}</p>`);
// })

// * using curriculum...
// $.get("https://api.openweathermap.org/data/2.5/weather", {
//     APPID: weatherKey,
//     q: "Tucson, US",
//     units: "imperial"
// }).done(function (data) {
//     console.log(data);
//
//     $(".temp").append(`<p>${data.main.temp}</p>`);
//     $(".description").append(`<p>${data.weather}</p>`);
//     $(".humidity").append(`<p>${data.main.humidity}</p>`);
//     $(".wind").append(`<p>${data.wind.speed}</p>`);
// });

// * 5 day forecast...
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: weatherKey,
//     q:   "Tucson, US",
//     units: "imperial"
// }).done(function(data) {
//     console.log('5 day forecast', data.list[0]);
//     for (let i = 0; i < data.list.length; i++){
//         console.log(data.list[i]);
//     }
//
// });

// test location weather: -110.99, 32.32

// * mapbox map...
mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 3,
    center: [-110.9747, 32.2226]
});

function init () {
    document.getElementById('btnGet').addEventListener('click', getWeather);
    document.getElementById('btnCurrent').addEventListener('click', getLocation);
}
