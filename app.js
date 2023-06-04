var sec = 0;
var min = 0;
var hour = 0;

var secVal = document.getElementById("Sec");
var MinVal = document.getElementById("Min");
var hourVal = document.getElementById("hour");
var startbtn = document.getElementById("Startbtn");


var interval;

function renderVal(){
    secVal.innerHTML = sec;
    MinVal.innerHTML = min;
    hourVal.innerHTML = hour;

}
function timeStart(){
   startbtn.disabled = true;
   stopbtn.disabled = false;
    sec++;
    if(sec == 60){
        min++;
        sec = 0
        if(min == 60 ){
            hour++
            min = 0;
        }
    }
    renderVal();
}
function timer(){
    interval = setInterval(function(){
        timeStart()
    },1000);
}
function Stoptimer(){
    startbtn.disabled = false;
    stopbtn.disabled = true;
    clearInterval(interval);
}
function ResetTimer(){
     sec = 0;
     min = 0;
     hour = 0;

    Stoptimer();
    renderVal();
}
var secs = prompt("Enter Secs fot the timer");
var mins = prompt("Enter Mins fot the timer");
var hours = prompt("Enter Hours fot the timer");

var secVals = document.getElementById("Secs");
var MinVals = document.getElementById("Mins");
var hourVals = document.getElementById("hours");
var startbtn = document.getElementById("Startbtn");

var intervals;

function renderValues(){
    secVals.innerHTML = secs;
    MinVals.innerHTML = mins;
    hourVals.innerHTML = hours;

}

function timerst(){
    if (secs > 0) {
        secs--;
    } else {
        if (mins > 0) {
            mins--;
            secs = 59;
        } else {
            if (hours > 0) {
                hours--;
                mins = 59;
                secs = 59;
            }
            
        }

        
    }
    renderValues();
}
function thetimer(){
    intervals = setInterval(function(){
        timerst()
    },1000);
    renderVal();
}
function Stopthetimer(){
    clearInterval(intervals);
}
