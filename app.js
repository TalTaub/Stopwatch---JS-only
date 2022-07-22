
var counter = document.getElementById("counter");
var showTime = "00:00";
var timerGo;
var timerOn = false;

/*  time start up keeps the total amount of seconds counted in total.
    i know this project could have been done easier if i would create 2 areas (for minutes and seconds)
    but this way its way more interesting ^_^ */
var time = parseInt(counter.innerText[0]+counter.innerText[1]+counter.innerText[3]+counter.innerText[4]);
function StartCount() {
    time++;
    if (time<1000){
        if (time%60<10){
            showTime = "0"+parseInt(time/60)+":0"+time%60;
        }
        else{
            showTime = "0"+parseInt(time/60)+":"+time % 60;
        }
    }
        else{
        showTime = parseInt(time/60)+":0"+time%60;
        }
    counter.innerHTML = showTime;
    timerGo = setTimeout(() => {StartCount()}, 1000)
}

function startClick (){
    if (!timerOn){
   StartCount();
        timerOn=true;
}

}

function stopClick(){
    clearTimeout(timerGo);
    timerOn=false;
} 

function resetClick(){
    clearTimeout(timerGo);
    time=0;
    timerOn=false;
    counter.innerHTML = "00:00";
}