import { FetchApi } from './FetchApi.js';
import {displayDate} from '../UtilFunc.js';

class WeatherApp {
    constructor(cityName) {
        this.cityName = cityName;
        this.baseUrl = new FetchApi('https://api.openweathermap.org/data/2.5/');
    }

    async displayWeather() {
        const response = await this.baseUrl.getWeatherData(this.cityName);
        console.log('data response here: ', response);
        this.render(response);
    }
    
    render(weather) {
        const { name } = weather;
        this.date = displayDate(weather.dt);
        
        const container = document.querySelector('.container');
        container.innerHTML = '';
        const weatherElement = document.createElement("div");
        weatherElement.classList.add('app');
        weatherElement.innerHTML = `
            <main>
                <div class='first-section'>
                    <div class="location">
                        <div class="city">
                            ${name} , ${weather.sys.country}
                        </div>
                        <div class="date">
                            ${this.date}
                        </div>
                    </div>
                    <div class="current">
                        <img 
                            src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"
                        />
                        <div class="temperature">
                            ${Math.round(weather.main.temp)}
                            <span>°C</span>
                        </div>
                        <div class="weather">
                            ${weather.weather[0].main}
                        </div>
                        <div class="low-high">
                            Min ${Math.round(weather.main.temp_min)}°C / Max ${Math.round(weather.main.temp_max)}°C
                        </div>
                    </div>
                </div>
                <div class="second-section">
                    <p><span>Details: </span>${weather.weather[0].description} </p>
                    <p><span>Wind speed </span>${weather.wind.speed} m/s</p>
                    <p><span>Humidity </span> ${weather.main.humidity} % </p>
                    <p><span>Feels like </span>${Math.round(weather.main.feels_like)} °C</p>
                    <p><span>Pressure </span>${weather.main.pressure} hPa</p>
                </div>
            </main>`;
        container.appendChild(weatherElement);
    }
}

export { WeatherApp }