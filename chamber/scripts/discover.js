import('./common.js');
import('./calendar.js')

const calendar = document.querySelector('#sideBarItem3');
calendar.innerHTML = `
    <div class="calendar">
        <header class="calendar__header">
            <div class="calendar__month"></div>
            <div class="calendar__year"></div>
        </header>
        <div class="calendar__grid">
            <div class="calendar__day-names">
            <span class="calendar__day-name">S</span>
            <span class="calendar__day-name">M</span>
            <span class="calendar__day-name">T</span>
            <span class="calendar__day-name">W</span>
            <span class="calendar__day-name">T</span>
            <span class="calendar__day-name">F</span>
            <span class="calendar__day-name">S</span>
            </div>
            <div class="calendar__day-numbers"></div>
        </div>
    </div>
`;

function getDaysDiff(start, end){
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

    return Math.round(Math.abs((start - end) / oneDay));
}

const dynamicText = document.querySelector('#welcomeText');
var lastVisitedDate = Date.parse(localStorage.lastVisitedDate);
var currentDate = new Date();
if (lastVisitedDate != "") {
    var daysSinceLastVisit = getDaysDiff(lastVisitedDate, currentDate);
    if (daysSinceLastVisit < 1)
        dynamicText.innerHTML = '<h2>Back so soon! Awesome!</h2>';
    else if (daysSinceLastVisit >= 1) {
        dynamicText.textContent = `<h2>You last visited ${daysSinceLastVisit} days ago</h2>`
    }
}



localStorage.lastVisitedDate = currentDate;