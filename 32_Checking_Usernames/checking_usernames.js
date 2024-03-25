"use strict";
const current_users = ['Ali', 'SaMi', 'UsaMa', 'Taha', 'Hamza'];
let new_users = ['Ahmed', 'ALi', 'Faisal', 'Bahadur', 'UsaMa'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available please write a different name`);
    }
    else {
        console.log(`the username ${newUsername} is available `);
    }
});
