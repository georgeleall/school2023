// darkmode js

// create a variable for the button
var button = document.getElementById("button");

// create the toggle function
function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
    toggleButton();
}

// create the toggleButton function to change
// the button text
function toggleButton() {
    // if the class darkmode is there, then ...
    if (document.body.classList.contains("darkmode")) {
        button.innerText = "Enable Daymode";
    } else {
        button.innerText = "Enable Darkmode";
    }
}

// create an event listener
button.addEventListener("click", toggleDarkMode);

// use onload properly, without invoking the function
window.onload = function () {
    toggleButton();
};
