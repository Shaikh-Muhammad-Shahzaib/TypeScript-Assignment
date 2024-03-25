"use strict";
function make_sandwich(item) {
    console.log('\n\nMaking your sandwich with');
    item.forEach(element => console.log("- " + element));
    console.log('\n\nEnjoy our sandwich!');
}
make_sandwich(['Ham', 'Cheese', 'Lettuce']);
make_sandwich(['Turkey', 'Bacon']);
make_sandwich(['Peanut Butter', 'Jelly']);
