//create a function logKeycode to display the pressed key
function logKeycode(e){
    console.log("You pressed: ", e.keyCode)

    //if 'd' is pressed (68) then toggleDarkMode
    if (e.keyCode == 68 || e.keyCode == 66){
        document.body.classList.toggle("darkmode");
    }
}

document.onkeydown = logKeycode;