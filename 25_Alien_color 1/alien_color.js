"use strict";
// alien colors #1: Imagine an alien was just shoot down in a game,
// create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = 'Green';
// Write an if statement to test weather the alien color is green if it is print a message that the player just earned 5 points.
if (alien_color === 'Green') {
    console.log("Player Just earned 5 points !");
}
//write one version of this program that passess the if test and another that fails.
alien_color = 'yellow';
// the version that fail will have no output.
if (alien_color === 'Green') {
    console.log("Player Just earned 5 points !");
}
alien_color = 'red';
if (alien_color != 'Green') {
    console.log("You just have lost the game!");
}
