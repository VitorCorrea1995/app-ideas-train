const [days, hours, minutes, seconds] = document.getElementsByClassName('count-field');

const inputEl = document.getElementById('input');
const today = new Date();

inputEl.setAttribute('min', today.toISOString().split('T')[0]);

function getTimeLeft () {
  const toDate = new Date(inputEl.value);
  const currentTime = new Date();
  const diffMiliSeconds = Math.abs(toDate - currentTime);
  
  return [Math.ceil((diffMiliSeconds / 1000) / (60 * 60 * 24)), Math.ceil(((diffMiliSeconds/ 1000) / (60*60)) % 24), 
    Math.ceil(((diffMiliSeconds/ 1000) / 60) % (60)), Math.ceil((diffMiliSeconds/ 1000) % (60))];
}

function computeTimeLeft() {
  console.log('lala');
  const [daysLeft, hoursLeft, minutesLeft, secondsLeft] = getTimeLeft();

  if (daysLeft == '0' && hoursLeft == '0' && minutesLeft == '0' && secondsLeft == '0') clearInterval(interval);
  
  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  minutes.innerText = minutesLeft;
  seconds.innerText = secondsLeft;
}

let interval;
function setCountDown() {
  interval = setInterval(computeTimeLeft, 1000);
}