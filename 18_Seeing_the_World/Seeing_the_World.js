"use strict";
// store the location in the array make sure the array is not in alphabetical order.
let places = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times square'];
//print your array in ites original order.
console.log('original ' + places);
//print your array in Alphabetical order without modifing the actual list.
console.log('Copy ' + [...places].sort());
// show that your array is still in its original order by printing it.
console.log('original ' + places);
//print your array in reverse alphabetical order without changing the order od the orignial list.
console.log('Copy ' + [...places].sort().reverse());
// show that your array is still in its original order by printing it.
console.log('original ' + places);
//reverse the order of your list print the array to show that its order has changed.
console.log('original ' + places.reverse());
// reverse the order of your list again print the list to show its back to its original order.
console.log('original ' + places.reverse());
// sort your array so its stored in alphabetical order print the array to show that its order has been changed.
console.log('original ' + places.sort());
// sort to change your array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
