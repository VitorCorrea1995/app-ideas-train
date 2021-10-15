const NUMBER_PATTERN = /^\d+$/;
const ROMAN_DEC_MAP = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
const OPTIONS = {ROMAN: 'toRoman', DECIMAL: 'toDecimal'};

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const convertBtn = document.getElementById('convert');


const _getInput = () => inputEl.value;

const _getOption = () => {
  const optionEl = document.querySelector('input[name="options"]:checked');
  return optionEl ? optionEl.value : OPTIONS.ROMAN;
}

const computeToRoman = (decNumbers) => {

  let result = '';
  const reversedRomanLetters = Object.keys(ROMAN_DEC_MAP).reverse();
  for (const letter of reversedRomanLetters) {
    const minLetterTimes = Math.floor(decNumbers / ROMAN_DEC_MAP[letter]);
    decNumbers -= minLetterTimes * ROMAN_DEC_MAP[letter];
    result += letter.repeat(minLetterTimes);
  }

  return result;
}

const computeToDec = (romanLetters) => {
  let sum = 0;
  romanLetters.forEach(letter => sum += ROMAN_DEC_MAP[letter.toUpperCase()]);

  return sum;
}

const convert = () => {
  
  const input = _getInput();
  const option = _getOption();

  const inputArr = [...input];

  inputArr.forEach(validateInput);

  outputEl.value = option === OPTIONS.ROMAN ? 
    computeToRoman(Number(input)) : computeToDec(inputArr);
}

const validateInput = () => {
  const input = _getInput();
  const option = _getOption();

  if ((option === OPTIONS.ROMAN && !NUMBER_PATTERN.test(input.toString()))
  || (option === OPTIONS.DECIMAL && [...input].some(val => !Object.keys(ROMAN_DEC_MAP).includes(val.toUpperCase())))) {
    inputEl.value = input.slice(0, -1);
  }
  return;
}

inputEl.addEventListener('input', validateInput);
convertBtn.addEventListener('click', convert);
