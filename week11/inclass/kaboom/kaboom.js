/* Create JS that place a random bomb
* icon on the page that goes kaboom
* when you mouseover
*
* Create a variable for the bomb
* position absolute, random top and left
* 64 px fontsize
* use the appendChild to place it on the page
*/

const bomb = document.createElement('div');
bomb.innerHTML = "💣";
bomb.style.position = "absolute";
bomb.style.top = Math.floor(Math.random() * 400) + "px";
bomb.style.left = Math.floor(Math.random() * 400) + "px";
bomb.style.fontSize = "64px";
document.body.appendChild(bomb);

function kaboom() {
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = "<h1>KABOOOOM!!!!</h1>"
}

// add the bomb icon event listener
bomb.addEventListener("mouseover", kaboom);