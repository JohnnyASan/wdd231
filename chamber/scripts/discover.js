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