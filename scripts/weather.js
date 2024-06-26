const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const appid = '22435c4d8e01a61cdbad7b5733812a2a';
const lat = '15.76947';
const lon = '-86.79603';

const url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${appid}`;

async function apiFetch() {
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



async function displayResults() {
    let data = await apiFetch();
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather.icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'openweathermap icon');
    captionDesc.textContent = `${desc}`;
}

displayResults();