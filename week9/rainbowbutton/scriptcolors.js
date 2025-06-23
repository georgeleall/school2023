// JS file for Rainbow.html

// List of colors to change the background
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];

// Pick a random color from the list as part of a function
function changeBackground() {
let color_choice = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = color_choice;
// console.log("The color choice is: " + color_choice);
}


// Declare a variable for the button
const button = document.getElementById("button");

// Add an event listener to the button 
button.addEventListener("click", changeBackground);
