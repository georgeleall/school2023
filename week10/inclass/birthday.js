// Is it Your birthday?
// Determine whether today is the date entered
// and display Happy Birhtday if it is

let bday = new Date(2002, 1, 24);
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

let today = new Date();
let month = today.getMonth();
let day = today.getDate();

if (day == bd_day && month == bd_month){
    console.log("Happy Birthday!")
}

else{
    console.log("It's not your birthday!")
}