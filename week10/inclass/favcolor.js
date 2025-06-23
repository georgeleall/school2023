// Use an If statement to test whether or not
// your favorite color is the same as the computers

let favorite_color = 'magenta';

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "magenta"
];

let random_color = colors[Math.floor(Math.random() * colors.length)];

if (favorite_color == random_color) {
    console.log("Magenta is my favorite color too!");
    
}

else{
    console.log("My favorite color is " + random_color + "!");
}