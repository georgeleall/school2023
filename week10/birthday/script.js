let message = document.getElementById("message");
let pic = document.getElementById("bday_pic");
let pic1 = document.getElementById("notbday_pic");

let bday = new Date(2002, 10, 14);
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

let today = new Date();
let month = today.getMonth();
let day = today.getDate();

if (day == bd_day && month == bd_month){
    message.innerHTML = "Happy Birthday!";
    bday_pic.src = "img/cutedog.jpg"
}

else{
    message.innerHTML = "It's not your birthday!";
    notbday_pic.src = "img/pug.jpg"
}