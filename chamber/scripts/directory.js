import('./common.js');

const membersList = document.querySelector('#membersList');

async function displayMembers() {
    const membersResponse = await fetch('./data/members.json');
    const members = await membersResponse.json();
    // console.log(members);

    members.forEach(m => {
        console.log(m);
        const card = document.createElement('div');
        card.classList.add('memberCard');

        const fig = document.createElement('figure');
        const logo = document.createElement('img');
        const caption = document.createElement('figcaption');
        caption.innerText = `${m.name}`;
        logo.src = m.imageUrl;

        fig.appendChild(logo);
        fig.appendChild(caption);
        card.appendChild(fig);
        membersList.appendChild(card);
    });
}

displayMembers();

