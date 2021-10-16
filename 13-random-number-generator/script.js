const MAX = 999999;
const MIN = -999999;
const NUMBER_PATTERN = /^\-?[1-9]\d{0,6}(\.\d*)?$/;
const INITIAL_MIN_VALUE = -1;
const INITIAL_MAX_VALUE = 1;

const generateBtn = document.getElementById('generate');
const minEl =document.getElementById('min');
const maxEl = document.getElementById('max');
const outputEl = document.getElementById('output');

minEl.value = INITIAL_MIN_VALUE;
maxEl.value = INITIAL_MAX_VALUE;

const isInvalidInput = (value, op) =>  value === '' || !NUMBER_PATTERN.test(value) || op;

const minValidation = () => {
  if (isInvalidInput(minEl.value, minEl.value < MIN)) {
    minEl.value = '';
    return false;
  }
  return true;
}

const maxValidation = () => {
  if (isInvalidInput(maxEl.value, maxEl.value > MAX)) {
    maxEl.value = '';
    return false;
  }
  return true;
}

const generateRandomNumber = () => {
  outputEl.innerHTML = '';
  if (maxValidation() && minValidation()) {
    const interval = Number(maxEl.value) - Number(minEl.value);
    outputEl.innerHTML = Math.random() * interval + Number(minEl.value);
  }
}

minEl.addEventListener('input', minValidation);
maxEl.addEventListener('input', maxValidation);
generateBtn.addEventListener('click', generateRandomNumber);

