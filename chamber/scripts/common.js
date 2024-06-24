const footer = document.querySelector('#footer');
footer.innerHTML = 
`<div id="contactInfo" class="footerCell">
    <p id="contactName">Naples UT Chamber of Commerce</p>
    <p id="contactAddress1">123 Sesame St</p>
    <p id="contactAddress2">Naples, UT 84078</p>
    <p id="contactEmail">contact@napleschamber.com</p>
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
    <p id="currentYear"> Naples UT Chamber of Commerce</p>
    <p id="lastModified"></p>
</div>`;

const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navElement');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Updated on <i>${document.lastModified}</i>`;


const currentYear = document.getElementById('currentYear');
currentYear.textContent = "@ " + new Date().getUTCFullYear() + " Naples UT Chamber of Commerce";

