// test location weather: -110.99, 32.32

// *** MAPBOX SECTION ***

// home
let homeLat = 32.32;
let homeLng = -110.99;
// need to figure out how to clear this data when a new location is clicked.

// when page loads
$(document).ready(function () {
    //sets first location
    getWeather(homeLat, homeLng);
    // centers on my location
    mapboxgl.accessToken = mapBoxKey;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [homeLng, homeLat]
    });
    // Set marker options.
    const marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat([homeLng, homeLat])
        .addTo(map);
    // Add geocoder to the map.
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    //trying to figure out how to make the marker draggable and update coordinates to open-api
    // this.marker = new mapboxgl.Marker();
    // this.map.on('click', this.marker.bind(this));
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
        $(".city").append(`${city}`)
        for (i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i]);
            let date = data.list[i].dt_txt;
            let tempHigh = data.list[i].main.temp_max;
            let tempLow = data.list[i].main.temp_min;
            let weather = data.list[i].weather[0].description;
            let humidity = data.list[i].main.humidity;
            let wind = data.list[i].wind.speed;
            let pressure = data.list[i].main.pressure;
            let icon = data.list[i].weather[0].icon;
            $(".card-group").append(`
            <div class="card">
                <div class="card-header text-center bg-secondary">${date}</div>
                <div class="card-body text-center">
                    <h6>${tempHigh}°F / ${tempLow}°F</h6>
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">${weather}</li>
                    <li class="list-group-item">Humidity: ${humidity}%</li>
                    <li class="list-group-item">Wind: ${wind} mph</li>
                    <li class="list-group-item">Pressure: ${pressure} hPa</li>
                </ul>
            </div>
        `)
        }
    })
}