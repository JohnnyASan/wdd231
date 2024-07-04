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
    membershipLevelModal.innerHTML = `
    <table>
        <tr>
            <th>Membership Level</th>
            <th>Description</th>
            <th>Monthly Fee</th>
        </tr>
        <tr>
            <td>Bronze</td>
            <td>Bronze Membership Description</td>
            <td>$35</td>
        </tr>
        <tr>
            <td>Silver</td>
            <td>Silver Membership Description</td>
            <td>$75</td>
        </tr>
        <tr>
            <td>Gold</td>
            <td>Gold Membership Description</td>
            <td>$125</td>
        </tr>
        <tr>
            <td>Non-Profit</td>
            <td>Non-Profit Membership Description</td>
            <td>$0</td>
        </tr>
    </table>
    `;

    membershipLevelModal.showModal();

    // closeModal.addEventListener('click', () => {
    //     membershipLevelModal.close();
    // })
}
