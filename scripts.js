// Getting elements from the DOM
const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Variables to keep track of time
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timerInterval;

// Format time function to display hours, minutes, and seconds
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start/Stop the stopwatch
function startStopwatch() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timerInterval);
        isRunning = false;
        startStopBtn.textContent = 'Start';
    } else {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timeDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
        startStopBtn.textContent = 'Stop';
    }
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    timeDisplay.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

// Event listeners for Start/Stop and Reset buttons
startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
