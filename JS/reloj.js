//Get current time in JavaScript
function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    //Set the time period(AM/PM)
    if(hours >= 12){
        period = "PM";
    }

    if(formatValue === "12"){
    hours = hours > 12 ? hours % 12 : hours;
    }

    //Add the 0 for the values lower than 10
    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

//Get the date in JavaScript

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();       
const dayName = today.toLocaleDateString("es-ES", {weekday: "long"});
const monthName = today.toLocaleDateString("es-ES", {month: "long"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
