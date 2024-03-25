//Alin color #2: chose a color for an alien as you did in exercise 25
let alienColors: string = "Green";
//write an if-else chain
//if the alien color is green
//print a statement that Player just earned 5 points for shooting the alien 
if(alienColors === 'Green'){
    console.log("Player just earned 5 points for shooting the alien");
}else{
    console.log("Player just earned 10 points");
}
// if the alien color is not green print a statement that the player just earned 10 points
alienColors = "Red";
if(alienColors === 'Green'){
    console.log("Player just earned 5 points for shooting the alien");
}else{
    console.log("Player just earned 10 points");
}