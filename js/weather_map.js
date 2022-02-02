// test location weather: -110.99, 32.32

// *** MAPBOX SECTION ***

// preset
let homeLat = 32.32;
let homeLng = -110.99;
// need to figure out how to clear this data when a new location is clicked.

// when page loads
$(document).ready(function () {
    //sets first location
    document.getElementById('btnGet').addEventListener('click', function () {
        getWeather(document.getElementById('latitude').value, document.getElementById('longitude').value);
    });
    // centers on preset location
    mapboxgl.accessToken = mapBoxKey;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [homeLng, homeLat]
    });
    // make marker with options.
    const marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat([homeLng, homeLat])
        .addTo(map);

    //creates marker on double click event with given mapbox options
    function addMarker (event) {
        let coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map); // adds to map
        map.flyTo({center: [coordinate.lng, coordinates.lat], zoom: 10}) //animation when locaton changes
    }
    map.on("dblclick", addMarker); //event listener for 2x click

    // Add geocoder to the map. (search bar)
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    //trying to figure out how to make the marker draggable and update coordinates to open-api
})

// *** OPEN WEATHER SECTION ***

function getWeather (lat, lng) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherKey,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        let city = data.city.name;
        $(".city").append(`${city}`);

        // loops through data array by iterations of 8 to get 5 arrays(days) back
        for (i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i]);
            // storing data into variables
            let date = new Date((data.list[i].dt)*1000).toDateString(); // makes date readable
            let icon = data.list[i].weather[0].icon; // for img
            // creates boostrap cards each iteration and adds readable data
            $(".card-group").append(`
            <div class="card">
                <div class="card-header text-center bg-secondary">${date}</div>
                <div class="card-body text-center">
                    <h6>${data.list[i].main.temp_max}°F / ${data.list[i].main.temp_min}°F</h6>
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">${data.list[i].weather[0].description}</li>
                    <li class="list-group-item">Humidity: ${data.list[i].main.humidity}%</li>
                    <li class="list-group-item">Wind: ${data.list[i].wind.speed} mph</li>
                    <li class="list-group-item">Pressure: ${data.list[i].main.pressure} hPa</li>
                </ul>
            </div>
        `)
        }
    })
}

$("#find").click(function (e){
    e.preventDefault();
    //need geo code
    // console.log($("#search").val());// .val allows us to accept value being put in any element
    geocode($("#search").val(), mapboxgl.accessToken)
        .then(function (coordinates) {
            lon = coordinates[0];
            lat = coordinates[1];
            console.log(coordinates)
            weatherOptions.lat = lat;// making change here to affect var outside of this function
            weatherOptions.lon = lon;
            // map.setCenter(coordinates);// ################ chekc this out again
            $(".currentCity").html(`Current City: ${$("#search").val()}`)

            // "current city" + $("#search").val()
            // marker.setLngLat() // this was causing an error with the fly-to call

            // flys to a location vs jumping with this
            map.flyTo({
                center: [
                    long,
                    lati
                ],
                zoom: 10,
                essential: true
            });
            marker.setLngLat(coordinates)// have to set something inside here to work

            weatherData()// reset after each call
        })
})