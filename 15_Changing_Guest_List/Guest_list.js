"use strict";
let Guest_list = ['Sami Hussain', 'Usama Ahmed', 'Taha Aftab', 'Ali Rasheed', 'Hamza Iqbal'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
}
let absent_Guest = 'Sami Hussain';
let new_Guest = 'Huzaifa Jilani';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
}
console.log(`Mr. ${absent_Guest} is not comming to the party.`);
