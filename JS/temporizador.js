const display = document.querySelector('.timer-display');
const minutesSpan = display.querySelector('.minutes-timer');
const secondsSpan = display.querySelector('.seconds-timer');

let secondsLeft = 0;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(timerId);
      alert('Timer has ended!');
    } else {
      updateDisplay();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  secondsLeft = 0;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
}

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', () => {
  secondsLeft = prompt('Ingrese tiempo necesitado en segundos:');
  updateDisplay();
  startTimer();
  
});

stopButton.addEventListener('click', stopTimer);

resetButton.addEventListener('click', resetTimer);
