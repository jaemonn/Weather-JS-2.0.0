// Init ui
const ui = new UI();

// Init localStorage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.location);

// Get DOMLoadContent
document.addEventListener('DOMContentLoaded', getWeather);

// Change location using enter
document.getElementById('w-form').addEventListener('submit', (e) => {
    const location = document.getElementById('location').value;

    if (location === '' || location === 'Guam') {
        ui.alert();
    } else {
        // Close modal after inputting a location
        document.querySelector('.closer').setAttribute('data-bs-dismiss', 'modal');
        // Change location
        weather.changeLocation(location);

        // Set location in LS
        storage.setLocationData(location);

        //Get and display weather
        getWeather();

        // Close modal
        //$('#locModal').modal('hide');

        // Clear search input
        ui.clear();

        window.location.reload();
    }

    e.preventDefault();
});

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const location = document.getElementById('location').value;

    if (location === ''|| location === 'Guam') {
        ui.alert();
    } else {
        // Close modal after inputting a location
        document.querySelector('.closer').setAttribute('data-bs-dismiss', 'modal');
        // Change location
        weather.changeLocation(location);

        // Set location in LS
        storage.setLocationData(location);

        //Get and display weather
        getWeather();

        // Close modal
        //$('#locModal').modal('hide');

        // Clear search input
        ui.clear();

        window.location.reload();
    }

    e.preventDefault();
});

function getWeather() {
    let loader = document.querySelector('.preloader');

    weather.getWeather()
        .then(results => {
            console.log(results);

            // Init timezone
            const tz = new Timezone(results);

            function getTimezone(weather_data) {
                tz.getTimezone()
                    .then(results => {
                        console.log(results);
                        ui.date_and_time(results, weather_data);
                    })
                    .catch(err => console.log(err));
            }

            getTimezone(results);
            ui.paint(results);

            document.querySelector('#preloader').style.display = 'none';
        })
        .catch(err => console.log(err));
}
