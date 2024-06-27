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
    for (i = 0; i < 5; i++) {
        const p = document.createElement('p');
        p.innerText = `event #${i+1}`;
        events.appendChild(p);
    }
}

function loadCurrentWeather(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const icon = document.querySelector('#currentWeatherIcon');
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', `${data.list[0].weather[0].description} weather icon`);

    const descrip = document.querySelector('#currentWeatherDescription');
    descrip.innerText = data.list[0].weather[0].description;

    const temp = document.querySelector('#currentWeatherTemp');
    temp.innerHTML = `<strong>${data.list[0].main.temp.toFixed(0)}&deg;F</strong>`;

    const high = document.querySelector('#currentWeatherHigh');
    high.innerHTML = `High: ${data.list[0].main.temp_max.toFixed(0)}&deg;`;

    const low = document.querySelector('#currentWeatherLow');
    low.innerHTML = `Low: ${data.list[0].main.temp_min.toFixed(0)}&deg;`;

    const humidity = document.querySelector('#currentWeatherHumidity');
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;

    const sunrise = document.querySelector('#currentWeatherSunrise');
    let sunriseDate = new Date(data.city.sunrise * 1000);
    let sunriseStr = sunriseDate.toLocaleString();
    sunriseStr = sunriseStr.substring(sunriseStr.indexOf(',') +1, sunriseStr.length);
    sunrise.innerText = `Sunrise: ${sunriseStr}`;

    const sunset = document.querySelector('#currentWeatherSunset');
    let sunsetDate = new Date(data.city.sunset * 1000);
    let sunsetStr = sunsetDate.toLocaleString();
    sunsetStr = sunsetStr.substring(sunsetStr.indexOf(',') +1, sunsetStr.length);
    sunset.innerText = `Sunset: ${sunsetStr}`;
}

function loadWeatherForecast(data) {
    let todayDate = new Date();
    const today = document.createElement('p');
    today.innerHTML = `Today: <strong>${data.list[0].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(today);

    const tomorrow = document.createElement('p');
    const tomorrowDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()+1);
    tomorrow.innerHTML = `${tomorrowDate.toLocaleString('en-us', {  weekday: 'long' })}: <strong>${data.list[8].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(tomorrow);

    const thirdDayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()+2);
    const thirdDay = document.createElement('p');
    thirdDay.innerHTML = `${thirdDayDate.toLocaleString('en-us', {  weekday: 'long' })}: <strong>${data.list[16].main.temp.toFixed(0)}&deg;F</strong>`;
    weatherForecast.appendChild(thirdDay);
}

async function loadWeather() {
    const data = await fetchWeather();
    loadCurrentWeather(data);
    loadWeatherForecast(data);
}

loadWeather();
loadEvents();

const businessCards = document.querySelector('.businessCards');

async function loadBusinessCards() {
    const membersResponse = await fetch('./data/members.json');
    const members = await membersResponse.json();
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 3);
    selectedMembers.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('businessCard');

        const businessCardHeader = document.createElement('h3');
        businessCardHeader.innerText = `${m.name}`;
        card.appendChild(businessCardHeader);

        const fig = document.createElement('figure');
        const logo = document.createElement('img');
        
        const caption = document.createElement('figcaption');
        caption.innerHTML = 
        `
        <p>${m.phone}</p>
        <p>${m.address1}</p>
        <p>${m.address2}</p>
        <p><strong>Membership Level:</strong> ${m.membershipLevel}</p>
        <a href="${m.website}">Website</a>
        `;
        logo.src = m.imageUrl;
        logo.alt = `${m.name} logo`;

        fig.appendChild(logo);
        fig.appendChild(caption);
        card.appendChild(fig);
        businessCards.appendChild(card);
    });
}

loadBusinessCards();

const joinButton = document.querySelector('#joinButton');
joinButton.addEventListener('click', () => {
    location.href = 'https://johnnyasan.github.io/wdd231/chamber/join.html'
});