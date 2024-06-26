import('./common.js');

const events = document.querySelector('#events');
const currentWeather = document.querySelector('#currentWeather');
const weatherForecast = document.querySelector('#weatherForecast');
const appid = '22435c4d8e01a61cdbad7b5733812a2a';
const lat = '40.4269052';
const lon = '-109.4993022';
const url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${appid}&cnt=20`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            data = await response.json();
            console.log(data);
            return data;
        } else {
            throw response.text();
        }
    } 
    catch (e) {

    }
}

function loadEvents() {
    const heading = document.createElement('h3');
    heading.innerText = 'Events';
    events.appendChild(heading);
    
    for (i = 0; i < 5; i++) {
        const p = document.createElement('p');
        p.innerText = `event #${i+1}`;
        events.appendChild(p);
    }
}

function loadCurrentWeather() {
    const heading = document.createElement('h3');
    heading.innerText = 'Current Weather';
    currentWeather.appendChild(heading);
}

function loadWeatherForecast(data) {
    const heading = document.createElement('h3');
    heading.innerText = 'Weather Forecast';
    weatherForecast.appendChild(heading);
    
    let todayDate = new Date();
    const today = document.createElement('p');
    today.innerHTML = `Today: <strong>${data.list[0].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(today);

    const tomorrow = document.createElement('p');
    const tomorrowDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()+1);
    console.log(tomorrowDate.getDate());
    tomorrow.innerHTML = `${tomorrowDate.toLocaleString('en-us', {  weekday: 'long' })}: <strong>${data.list[8].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(tomorrow);

    const thirdDayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()+2);
    const thirdDay = document.createElement('p');
    thirdDay.innerHTML = `${thirdDayDate.toLocaleString('en-us', {  weekday: 'long' })}: <strong>${data.list[16].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(thirdDay);
}

async function loadWeather() {
    const data = await fetchWeather();
    loadCurrentWeather();
    loadWeatherForecast(data);
}

loadWeather();
loadEvents();