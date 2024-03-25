// array of current users
let current_users: string[] = ['Ali', 'SaMi', 'UsaMa', 'Taha', 'Hamza'];
// array of new users
let new_users: string[] = ['Ahmed', 'ALi', 'Faisal', 'Bahadur', 'UsaMa'];
//loop through new_users to check for usernames availability.
new_users.forEach(newUsername => {
   let lowerCase: string = newUsername.toLowerCase();
   if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
      console.log(`The username ${newUsername} is not available please write a different name`);
   }
   else{
      console.log(`the username ${newUsername} is available `)
   }
})