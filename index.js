let timerDisplay = document.querySelector('.stopwatch');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let startTime, elaspedTime = 0, timerInterval;

function updateDisplay() {
    let totalSeconds = Math.floor(elaspedTime / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
   startTime = Date.now() - elaspedTime;
   timerInterval = setInterval(() => {
    elaspedTime = Date.now() - startTime;
    updateDisplay();
   }, 1000);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elaspedTime = 0;
    updateDisplay();
    startButton.disabled = false;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
