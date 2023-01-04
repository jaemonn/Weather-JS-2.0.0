class UI {
    constructor(weather) {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feels_like = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.currentWeatherItemsEl = document.getElementById('current-weather-items');
        this.timeEl = document.getElementById('time');
        this.dateEl = document.getElementById('date');
        this.today = document.getElementById('current-temp');
        this.weather_forecast = document.getElementById('weather-forecast');
        this.day0 = document.getElementById('day0');
    }

    paint(weather) {
        setInterval(() => {
            // Fahrenheit parse int
            const dewPointF = parseInt(`${weather.response.currentConditions.dew}`);
            const feelsLikeF = parseInt(`${weather.response.currentConditions.feelslike}`);
            const tempMax0 = parseInt(`${weather.response.days[0].tempmax}`);
            const tempMax1 = parseInt(`${weather.response.days[1].tempmax}`);
            const tempMax2 = parseInt(`${weather.response.days[2].tempmax}`);
            const tempMax3 = parseInt(`${weather.response.days[3].tempmax}`);
            const tempMax4 = parseInt(`${weather.response.days[4].tempmax}`);
            const tempMax5 = parseInt(`${weather.response.days[5].tempmax}`);
            const tempMin0 = parseInt(`${weather.response.days[0].tempmin}`);
            const tempMin1 = parseInt(`${weather.response.days[1].tempmin}`);
            const tempMin2 = parseInt(`${weather.response.days[2].tempmin}`);
            const tempMin3 = parseInt(`${weather.response.days[3].tempmin}`);
            const tempMin4 = parseInt(`${weather.response.days[4].tempmin}`);
            const tempMin5 = parseInt(`${weather.response.days[5].tempmin}`);

            // Unit conversion
            const dewInCelsius = Math.round((dewPointF - 32) * 5 / 9);
            const feelsLikeInCelsius = Math.round((feelsLikeF - 32) * 5 / 9);
            const tempMax0InC = Math.round((tempMax0 - 32) * 5 / 9);
            const tempMax1InC = Math.round((tempMax1 - 32) * 5 / 9);
            const tempMax2InC = Math.round((tempMax2 - 32) * 5 / 9);
            const tempMax3InC = Math.round((tempMax3 - 32) * 5 / 9);
            const tempMax4InC = Math.round((tempMax4 - 32) * 5 / 9);
            const tempMax5InC = Math.round((tempMax5 - 32) * 5 / 9);
            const tempMin0InC = Math.round((tempMin0 - 32) * 5 / 9);
            const tempMin1InC = Math.round((tempMin1 - 32) * 5 / 9);
            const tempMin2InC = Math.round((tempMin2 - 32) * 5 / 9);
            const tempMin3InC = Math.round((tempMin3 - 32) * 5 / 9);
            const tempMin4InC = Math.round((tempMin4 - 32) * 5 / 9);
            const tempMin5InC = Math.round((tempMin5 - 32) * 5 / 9);

            // weather.response.timezone
            this.location.innerHTML =
                `
                <p>${weather.response.resolvedAddress}
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#locModal">
                        <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                    </button>
                </p>
                `;

            //Future forecast icons
            const desiredLink0 = `Icons/${weather.response.days[0].icon}.svg`;
            const desiredLink1 = `Icons/${weather.response.days[1].icon}.svg`;
            const desiredLink2 = `Icons/${weather.response.days[2].icon}.svg`;
            const desiredLink3 = `Icons/${weather.response.days[3].icon}.svg`;
            const desiredLink4 = `Icons/${weather.response.days[4].icon}.svg`;
            const desiredLink5 = `Icons/${weather.response.days[5].icon}.svg`;

            this.currentWeatherItemsEl.innerHTML =
                `
                    <div class="weather-item">
                        <div>Humidity</div>
                        <div>${weather.response.currentConditions.humidity}%</div>
                    </div>
                    <div class="weather-item">
                        <div>Dew Point</div>
                        <div>${dewInCelsius} C  </div>
                    </div>
                    <div class="weather-item">
                        <div>Feels like</div>
                        <div>${feelsLikeInCelsius} C  </div>
                    </div>
                    <div class="weather-item">
                        <div>Wind Speed</div>
                        <div>${weather.response.currentConditions.windspeed} mph</div>
                    </div>
                    <div class="weather-item">
                        <div>Sunrise</div>
                        <div>${weather.response.currentConditions.sunrise} am</div>
                    </div>
                    <div class="weather-item">
                        <div>Sunset</div>
                        <div>${weather.response.currentConditions.sunset} pm</div>
                    </div>
                    `;

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            //Days of future weather forecast
            const time0 = (new Date(weather.response.days[0].datetime)).getDay();
            const time1 = (new Date(weather.response.days[1].datetime)).getDay();
            const time2 = (new Date(weather.response.days[2].datetime)).getDay();
            const time3 = (new Date(weather.response.days[3].datetime)).getDay();
            const time4 = (new Date(weather.response.days[4].datetime)).getDay();
            const time5 = (new Date(weather.response.days[5].datetime)).getDay();
            const day0 = days[time0];
            const day1 = days[time1].slice(0, 3);
            const day2 = days[time2].slice(0, 3);
            const day3 = days[time3].slice(0, 3);
            const day4 = days[time4].slice(0, 3);
            const day5 = days[time5].slice(0, 3);


            this.today.innerHTML =
                `
                    <img src="${desiredLink0}" alt="weather icon" class="w-icon">
                    <div class="other">
                        <div class="day" id="day0">${day0}</div>
                        <div class="temp">Max Temp: ${tempMax0InC}&#176; C</div>
                        <div class="temp">Min Temp: ${tempMin0InC}&#176; C</div>
                    </div>
                `;

            this.weather_forecast.innerHTML =
                `
                <div class="weather-forecast-item ">
                    <div class="day" id="day1">${day1}</div>
                    <img src="${desiredLink1}" alt="weather icon" class="w-icon">
                    <div class="temp">Max Temp: ${tempMax1InC}&#176; C</div>
                    <div class="temp">Min Temp: ${tempMin1InC}&#176; C</div>
                </div>
                <div class="weather-forecast-item ">
                    <div class="day" id="day2">${day2}</div>
                    <img src="${desiredLink2}" alt="weather icon" class="w-icon">
                    <div class="temp">Max Temp: ${tempMax2InC}&#176; C</div>
                    <div class="temp">Min Temp: ${tempMin2InC}&#176; C</div>
                </div>
                <div class="weather-forecast-item ">
                    <div class="day" id="day3">${day3}</div>
                    <img src="${desiredLink3}" alt="weather icon" class="w-icon">
                    <div class="temp">Max Temp: ${tempMax3InC}&#176; C</div>
                    <div class="temp">Min Temp: ${tempMin3InC}&#176; C</div>
                </div>
                <div class="weather-forecast-item ">
                    <div class="day" id="day4">${day4}</div>
                    <img src="${desiredLink4}" alt="weather icon" class="w-icon">
                    <div class="temp">Max Temp: ${tempMax4InC}&#176; C</div>
                    <div class="temp">Min Temp ${tempMin4InC}&#176; C</div>
                </div>
                <div class="weather-forecast-item">
                    <div class="day" id="day5">${day5}</div>
                    <img src="${desiredLink5}" alt="weather icon" class="w-icon">
                    <div class="temp">Max Temp: ${tempMax5InC}&#176; C</div>
                    <div class="temp">Min Temp: ${tempMin5InC}&#176; C</div>
                </div>
            `;
        }, 1000);

    }

    date_and_time(data, weather_Data) {

        setInterval(() => {
            const hour = parseInt(data.response.time_24.slice(0.5));
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const day = data.response.date_time_txt;
            const date = data.response.date_time_wti;
            const time0 = new Date(weather_Data.response.days[0].datetime);


            this.timeEl.innerHTML = data.response.time_24.slice(0, 5) + ' ' + `<span id="am-pm">${ampm}</span>`;

            this.dateEl.innerHTML = day.substring(0, day.indexOf(',')) + ' ' + date.slice(5, 11);
        }, 1000);
    }

    alert() {
        // Create a div element
        const errorDiv = document.createElement('div');

        // Get elements
        const form = document.querySelector('.form');
        const form_group = document.querySelector('.form-group');

        // Add class
        errorDiv.className = 'alert alert-danger';
        // Add inner html
        errorDiv.innerHTML = `<div class="">
            <p><i class="fa-solid fa-triangle-exclamation"></i> Location invalid</p>
            </div>`;

        // Insert before heading
        form.insertBefore(errorDiv, form_group);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clear() {
        document.getElementById('location').value = '';
    }
}