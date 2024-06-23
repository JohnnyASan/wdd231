const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navElement');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

