"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_list = ['Sami Hussain', 'Usama Ahmed', 'Taha Aftab', 'Ali Rasheed', 'Hamza Iqbal'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
// }
let absent_Guest = 'Sami Hussain';
let new_Guest = 'Huzaifa Jilani';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
// }
console.log(`Mr. ${absent_Guest} is not comming to the party.`);
console.log('Good news! We find a big Table so we are inviting 3 more guests. ');
Guest_list.unshift('Bahadur Ali');
Guest_list.splice(3, 0, 'Abdul Qadir');
Guest_list.push('Abdullah Khan');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
}
console.log('\nSorry we can not arrange big table, only Two people well be invited. ');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner. `);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n You are still Inivited \n\nThank You\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
