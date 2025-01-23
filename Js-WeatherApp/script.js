const apiKey = 'ed02e9a8a3fbfa99c0ec7e0cb49d0eb6';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherInfo.innerHTML = 'Please a city name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error ('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherImfo.innerHTML = 'Error fetching weather data. Please try again later.'
    }    
});

function displayWeather(data) {
    const {name} = data;
    const { temp } = data.main;
    const { description, icon } = data.weather[0];

    weatherInfo.innerHTML = `
    <h2>${ name }</h2>
    <p>Temperature: ${ temp }°C</p>
    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
    `;
}