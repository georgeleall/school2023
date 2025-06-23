//create variables
let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let startOver = document.getElementById("start_over");

let bill_amount = 0;
let tip_amount = 0;
let total = 0;
//create function
function tipBig(e) {
    e.preventDefault();

    //get bill amount
    bill_amount = Number(form.bill_total.value);
    tip_amount = bill_amount * 0.2;
    total = bill_amount + tip_amount;

    //enter the billing details
    results.innerHTML = "The tip is $";
    results.innerHTML += tip_amount.toFixed(2);
    results.innerHTML += "<br>";
    results.innerHTML += "The total is $";
    results.innerHTML += total.toFixed(2);

    startOver.style.display = "block";

}
//create a function that reloads the page
function reload() {
    window.location.reload();
}



//add event handlers
submit.addEventListener("click",tipBig);
startOver.addEventListener("click",reload);

// when the page loads: clear input & results then hide h2
window.addEventListener("load", onload = () => {
    form.bill_total.value = "";
    results.innerHTML = "";
    startOver.style.display = "none";
})
