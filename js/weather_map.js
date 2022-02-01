// test location weather: -110.99, 32.32

// *** MAPBOX SECTION ***
mapboxgl.accessToken = mapBoxKey;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 3,
    center: [-110.9747, 32.2226]
});


// *** OPEN WEATHER SECTION ***

function init () {
    document.getElementById('btnGet').addEventListener('click', getWeather);
    document.getElementById('btnCurrent').addEventListener('click', getLocation);
}

// <div className="col">
//     <div className="card" style="width: 30vw">
//         <h5 id="city" className="card-title p-2">City</h5>
//         <h6 id="date" className="card-title p-3">Date</h6>
//         <img
//             src="http://openweathermap.org/img/wn/10d@4x.png"
//             className="card-img-top"
//             alt="Weather description"
//         />
//         <div className="card-body">
//             <h3 className="card-title">Weather Label</h3>
//             <p className="card-text">High Temp Low Temp</p>
//             <p className="card-text">HighFeels like</p>
//             <p className="card-text">Pressure</p>
//             <p className="card-text">Precipitation</p>
//             <p className="card-text">Wind speed and direction</p>
//         </div>
//     </div>
// </div>
function getWeather () {
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = weatherKey;
    let lang = 'en';
    let units = 'imperial';
    $.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`).done(function (data) {
        var fivedays = [];
        for (let i = 0; i < data.list.length; i += 8) {
            fivedays.push(data.list[i]);
        }
    });
}

function getLocation () {
    let options = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, //10s
        maximumAge: 1000 * 60 * 5, //5min
    };
    navigator.geolocation.getCurrentPosition(success, fail, options);
}
function success () {
    console.log("cool")
}
function fail () {
    console.log("went wrong")
}

init(); //makes form field and buttons work
