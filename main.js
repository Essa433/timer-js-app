
    const timerDiv = document.getElementById('timer')
    const startButton = document.getElementById('start-btn')
   
let didStart = false
let timer;

const startButtonFunction = (event) => {
    if (didStart) {
        clearInterval(timer)
        timerDiv.innerText = '0';
        startButton.innerText = 'Start';
        didStart = false;
    } else {
        startTimer();
        startButton.innerText = 'Stop';
        didStart = true;
    }
}

function startTimer() {
    const dateRun = new Date().valueOf();

    const dateNow = new Date().valueOf() + 1000;
    const newTimer = Math.floor((dateNow - dateRun)/ 1000).toFixed(0);
        timerDiv.innerText = newTimer;
        
        timer = setInterval(() => {
            const dateNow = new Date().valueOf() + 1000;
            const newTimer = Math.floor((dateNow - dateRun)/ 1000).toFixed(0);
            timerDiv.innerText = newTimer;
            
        }, 500);
        
    }
