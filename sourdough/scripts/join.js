import('./common.js');

const membershipHelp = document.querySelector('#levelHelp');
membershipHelp.addEventListener('click', () => {
    displayMembershipModal();
});

const membershipLevelModal = document.querySelector('#membershipLevelModal');

membershipLevelModal.addEventListener('click', (event) => {
    if (event.target.id === 'membershipLevelModal') {
        membershipLevelModal.close();
    }
});

function displayMembershipModal() {
    membershipLevelModal.showModal();
}

const timestamp = document.querySelector('#timestamp');
var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
timestamp.value = now.toISOString().slice(0,16);
console.log("TIMESTAMP:" + timestamp.value);