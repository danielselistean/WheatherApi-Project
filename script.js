import { WeatherApp } from './src/Classes/WeatherApp.js'

const startApp = () => {
    const container = document.querySelector('.root');
    const searchBox = document.createElement('div');
    searchBox.classList.add('search-box');
    searchBox.innerHTML = `<input 
                                type="search" 
                                autocomplete="off" 
                                id="search"
                                class="search-input" 
                                placeholder="Search for a city" 
                            />`;
    container.appendChild(searchBox);
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            const weather = new WeatherApp(searchInput.value);
            weather.displayWeather();
            searchInput.value = '';
        }
    })
}
startApp();