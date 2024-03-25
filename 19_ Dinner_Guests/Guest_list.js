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
// console.log(`Mr. ${absent_Guest} is not comming to the party.`);
// console.log('Good news! We find a big Table so we are inviting 3 more guests. ')
//array me 3 guest add kiye hen.
Guest_list.unshift('Bahadur Ali');
Guest_list.splice(3, 0, 'Abdul Qadir');
Guest_list.push('Abdullah Khan');
//yahan per mene guest ky array ko print karwaya hy.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
// }
//sorry message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, only Two people well be invited. ');
//yahan per mene guest remove kiye hen.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner. `);
}
// hamare bache howe 2 invited guest. 
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n You are still Inivited \n\nThank You\n\n');
// }
// mene sary guest array remove kar diye.
Guest_list.splice(0, 2);
console.log(Guest_list);
//  Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_list.length}`);
