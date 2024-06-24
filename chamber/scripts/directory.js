import('./common.js');

const membersList = document.querySelector('#membersList');
const oneColButton = document.querySelector('#oneColButton');
const threeColButton = document.querySelector('#threeColButton');

oneColButton.addEventListener('click', () => {
    oneColButton.classList.toggle('selected');
    threeColButton.classList.toggle('selected');
    membersList.classList.remove('threeColGrid');
    membersList.classList.add('oneColGrid');
});

threeColButton.addEventListener('click', () => {
    oneColButton.classList.toggle('selected');
    threeColButton.classList.toggle('selected');
    membersList.classList.remove('oneColGrid');
    membersList.classList.add('threeColGrid');
});

async function displayMembers() {
    const membersResponse = await fetch('./data/members.json');
    const members = await membersResponse.json();

    members.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('memberCard');

        const fig = document.createElement('figure');
        const logo = document.createElement('img');
        
        const caption = document.createElement('figcaption');
        caption.innerHTML = 
        `
        <h3>${m.name}</h3>
        <p>${m.phone}</p>
        <p>${m.address1}</p>
        <p>${m.address2}</p>
        <a href="${m.website}">Website</a>
        `;
        logo.src = m.imageUrl;
        logo.alt = `${m.name} logo`;

        fig.appendChild(logo);
        fig.appendChild(caption);
        card.appendChild(fig);
        membersList.appendChild(card);
    });
}

displayMembers();

