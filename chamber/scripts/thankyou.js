import('./common.js');

// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;

// Divide the URL into two halves
const everything = currentUrl.split('?');

// Grab just the second half and Break the form name value pairs into an array
const formData = everything[1].split('&');
console.log(formData);

function show(cup) {
    console.log(cup);
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@').replace(/\+/g, ' ');
        }
    });
    return result;
} // end show

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Thank you ${show('first')} ${show('last')}!</p>
<p>${show('orgName')}</p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: <a href="mailto:${show('email')}">${show('email')}</a></p>
<p>Time: ${show('timestamp').toLocaleString().replaceAll('%2F', '/').replaceAll('%3A', ':').replaceAll('%2C', ',')}</p>
`