let btnStart = document.querySelector("#btnStart");
let screenSettings = document.querySelector("#settings-screen");
let screenTimer = document.querySelector("#timer-screen");
let spanMinutes = document.querySelector("#minutes");
let spanSeconds = document.querySelector("#seconds");

btnStart.onclick = clickStart;


function clickStart() {
    let inputTime = document.querySelector(".input");

    if(inputTime.value !== "") {
        startTimer(inputTime.value);
    }
}

function startTimer(minutes) {
    screenSettings.style.display = "none";
    screenTimer.style.display = "block";

    let seconds = 60;
    minutes--;
    let timerId = setInterval (
        function() {
            if(seconds < 0) {
                if(minutes == 0) {
                    endTimer(timerId);
                }
                minutes--;
                seconds =60;
            }
            spanMinutes.innerText = minutes;
            spanSeconds.innerText = seconds;
            seconds--;
        }, 1000
    );
}

function endTimer(timerID) {
    screenSettings.style.display = "block";
    screenTimer.style.display = "none";
    clearInterval(timerID)
}