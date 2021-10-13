const MILI_SECOND_TO_SECOND = 1000;
const PHASES = {SESSION: 'SESSION', BREAK: 'BREAK'};
const ZERO_TIME = '00:00';
const INITIAL_SESSON_TIME = '25:00';
const INITIAL_BREAK_TIME = '05:00';

const phaseEl = document.getElementById('phase');
const counterEl = document.getElementById('counter');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');

const upSessionBtn = document.getElementById('up-session');
const downSessionBtn = document.getElementById('down-session');
const upBreakBtn = document.getElementById('up-break');
const downBreaknBtn = document.getElementById('down-break');

const displayBreakEl = document.getElementById('display-break');
const displaySessionEl = document.getElementById('display-session');

const _getCurrentTime = () => {
  return counterEl.innerText;
}

const _setCurrentTime = (time) => {
  counterEl.innerText = time;
}

let interval;
let currentPhase;

const play = () => {
  currentPhase = PHASES.SESSION;
  playBtn.disabled = true;
  interval = setInterval(runTime, MILI_SECOND_TO_SECOND);
}

const stop = () => {
  clearInterval(interval);
  playBtn.disabled = false;
}

const goToNextPhase = () => {
  const phaseOptions = Object.values(PHASES);
  const currentPhaseIndex = phaseOptions.findIndex(currentPhase);
  currentPhase = (currentPhaseIndex + 1) > (phaseOptions.length - 1) ? phaseOptions[0] : phaseOptions[(currentPhaseIndex + 1)];
  
  if (currentPhase === PHASES.SESSION) {
    counterEl.innerText = displaySessionEl.innerText;
  } else if (currentPhase === PHASES.BREAK) {
    counterEl.innerText = displayBreakEl.innerText;
  }

  return;
};

const runTime = () => {
  if (_getCurrentTime() === ZERO_TIME) {
    goToNextPhase();
    return;
  }
  computeNewTime();
}

const computeNewTime = () => {
  const [min, sec] = counterEl.innerText.split(':');
  const newTime = new Date();
  newTime.setMinutes(+min, +sec - 1);
  _setCurrentTime(`${newTime.getMinutes()}:${newTime.getSeconds()}`);
}

const upControl = ($event) => {
  // TO DO
}

const downControl = ($event) => {
  // TO DO
}

playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', stop);