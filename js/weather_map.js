"use strict"
$(document).ready(function () {

    // default setting location
    let lat = 29.42;
    let lon = -98.49;

    // map population with settings
    mapboxgl.accessToken = mapBoxKey;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [lon, lat]
    });

    // gives geocode search bar in map
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

    // adds markers to map
    let marker = new mapboxgl.Marker({
        draggable: true
    })
    marker
        .setLngLat([lon, lat])
        .addTo(map);

    getWeather();



//immediate event listener will populate weather cards for location input to form fields upon button submit.
//     document.getElementById('btnGet').addEventListener('click', function () {
//         getWeather(document.getElementById('latitude').value, document.getElementById('longitude').value);
//     });

// *** OPEN WEATHER SECTION ***

    // ajax query to openWeatherMap and function for displaying weather card data
    function getWeather(lat, lng) {
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: weatherKey,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            // let city = data.city.name;
            $(".card-group").html("");
            $(".city").html("");
            $(".city").append(`${data.city.name}`); // prints city name to page in html span.
            console.log(data);

            // loops through array data by iterations of 8 to get 5 arrays(days) back
            for (let i = 0; i < data.list.length; i += 8) {
                console.log(data.list[i]);
                let date = new Date((data.list[i].dt) * 1000).toDateString(); // makes date readable

                // creates boostrap card each iteration and adds readable data
                $(".card-group").append(`
                        <div class="card">
                            <div class="card-header text-center bg-secondary">${date}</div>
                            <div class="card-body text-center">
                                <h6>${data.list[i].main.temp_max}°F / ${data.list[i].main.temp_min}°F</h6>
                                <img src="https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="weather icon">
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center">${data.list[i].weather[0].description}</li>
                                <li class="list-group-item">Humidity: ${data.list[i].main.humidity}%</li>
                                <li class="list-group-item">Wind: ${data.list[i].wind.speed} mph</li>
                                <li class="list-group-item">Pressure: ${data.list[i].main.pressure} hPa</li>
                            </ul>
                        </div>
                `) // append end
            } // loop end
        }) // done function end
    } //getWeather end

    // get location by coordinates input, travels map to location, adds marker, and displays weather data
    $("#btnGet").click(function () {
        let nrt = $('#latitude').val();
        let est = $('#longitude').val();
        getWeather(nrt, est);
        marker
            .setLngLat([est, nrt]);
        map.flyTo({
            center: [est, nrt],
            essential: true
        })
    })

    // gets location when marker is dragged to point, adds marker, and displays weather data
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        getWeather(lngLat.lat, lngLat.lng);
        lon = lngLat.lng;
        lat = lngLat.lat;
        getWeather();
    }

    marker.on('dragend', onDragEnd);

    // gets location by name input, travels map there, adds marker, and displays weather data
    var longLat;

    $("#btnCurrent").click(function (e) {
        e.preventDefault();
        var address = $("#latitude").val();
        longLat = marker.getLngLat();
        // $(".city").html("");
        // $(".city").html(address);
        console.log(address);

        geocode(address, mapBoxKey).then(function (result) {
            // console.log(result);
            // lon = result[0];
            // lat = result[1];
            // getWeather(lon, lat); //populates card data on map travel
            // marker
            //     .setLngLat([lon, lat]);
            // map.flyTo({
            //     center: [lon, lat],
            //     essential: true
            // })
            // $(".city").html(address);
            let nrt = result[1];
            let est = result[0];
            getWeather(nrt, est);
            marker
                .setLngLat([est, nrt]);
            map.flyTo({
                center: [est, nrt],
                essential: true
            })
        });
        // getWeather();
    });

    // gets location with a double click on map, adds marker, and displays weather data
    function add_marker(event) {
        let coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
        map.flyTo({center: [coordinates.lng, coordinates.lat], zoom: 11});
        getWeather(coordinates.lat, coordinates.lng);
    }

    map.on('dblclick', add_marker);

});