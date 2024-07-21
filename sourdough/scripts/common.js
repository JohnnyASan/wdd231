const header = document.querySelector('#header');
header.innerHTML = 
`
<header>
    <img src="./images/sourdough_logo.jpeg" alt="Beginners' Sourdough Guide logo">
    <div>
        <h1>Beginners' Sourdough Guide</h1>
    </div>
</header>
<nav id="navElement">
    <button id="navButton" type="button" aria-label="hamburger menu"></button>
    <ul class="menuLinks">
        <li id="homeNavLink"><a class="navLink closedLink" href="./index.html" title="Home">Get Started</a></li>
        <li id="recipesNavLink"><a class="navLink closedLink" href="./recipes.html" title="Recipes">Recipes</a></li>
        <li id="joinNavLink"><a class="navLink closedLink" href="./join.html" title="Join">Weekly Newsletter</a></li>
    </ul>
</nav>
`;
const currentUrl = document.URL;
console.log(currentUrl);
const homeNavLink = document.querySelector('#homeNavLink');
const recipesNavLink = document.querySelector('#recipesNavLink');
const joinNavLink = document.querySelector('#joinNavLink');

if (currentUrl.includes('index')) homeNavLink.classList.add('currentMenuItem');
else if (currentUrl.includes('recipes')) recipesNavLink.classList.add('currentMenuItem');
else if (currentUrl.includes('join')) joinNavLink.classList.add('currentMenuItem');
else homeNavLink.classList.add('currentMenuItem');

const footer = document.querySelector('#footer');
footer.innerHTML = 
`<div id="contactInfo" class="footerCell">
    <p id="contactName">Sourdough Beginners' Guide</p>
    <p id="contactAddress1">123 Sesame St</p>
    <p id="contactAddress2">Naples, UT 84078</p>
    <p id="contactEmail">contact@email.com</p>
    <p id="contactPhone"></p>
</div>
<div id="socialMedia" class="footerCell">
    <a href="https://youtube.com"><img src="./images/youtube.png" alt="YouTube logo by riajulislam"></a>
    <a href="https://facebook.com"><img src="./images/facebook.png" alt="Facebook logo by riajulislam"></a>
    <a href="https://linkedin.com"><img src="./images/linkedin.png" alt="LinkedIn logo by riajulislam"></a>
</div>
<div id="devDetails" class="footerCell">
    <p>WDD231 Class Project</p>
    <p>Johnny Sanabria</p>
    <p id="currentYear"> Sourdough Beginners' Guide</p>
    <p id="lastModified"></p>
</div>`;

const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navElement');
const navLinks = document.querySelectorAll('.navLink');


hamburgerElement.addEventListener('click', () => {
    navLinks.forEach(nl => {
        nl.classList.toggle('closedLink');
    });
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Updated on <i>${document.lastModified}</i>`;


const currentYear = document.getElementById('currentYear');
currentYear.textContent = "@ " + new Date().getUTCFullYear() + " Naples UT Chamber of Commerce";
