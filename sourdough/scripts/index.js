import('./common.js');


const heroText = document.querySelector('#heroText');
async function getPun() {
    try {
        const res = await fetch('./data/puns.json');
        const sourdoughPuns = await res.json();
        let randNum = randomNumber(1, 5) - 1;
        console.log(sourdoughPuns[randNum.toFixed(0)]);
        return sourdoughPuns[randNum.toFixed(0)];
    }
    catch {

    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

getPun().then(x => heroText.textContent = x);