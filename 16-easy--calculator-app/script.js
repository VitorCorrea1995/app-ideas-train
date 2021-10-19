const CALCULATOR_BUTTONS = ['7','8','9','/','⎌', 'C', '4','5','6','*','(',')','1','2','3','-','po2','√','0','.','10','+','po3','='];
const EQUAL_BTN = '=';
const SQRT_BTN = '√';
const POW2_BTN = 'po2';
const POW3_BTN = 'po3';
const UNDO_BTN = '⎌';
const CLEAR_BTN = 'C';
const DECIMAL_BTN = '.';

const sqrt = Math.sqrt;
const pow = Math.pow;

const screenEl = document.getElementById('screen');

const loadCalculator = () => {
  const keyBoardEl = document.getElementById('keyboard');
  CALCULATOR_BUTTONS.forEach(button => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('keyboard-button');
    buttonEl.innerText = button;

    if (button === EQUAL_BTN) {
      buttonEl.onclick = () => calculate();
      buttonEl.classList.add('equal-button');
    } else if (button === SQRT_BTN) {
      buttonEl.onclick = () => sqrtFun();
    } else if (button === POW2_BTN) {
      buttonEl.onclick = () => pow2();
    } else if (button === POW3_BTN) {
      buttonEl.onclick = () => pow3();
    } else if (button === UNDO_BTN) {
      buttonEl.onclick = () => undo();
    } else if (button === CLEAR_BTN) {
      buttonEl.onclick = () => clear();
    } else if (button === DECIMAL_BTN) {
      buttonEl.onclick = () => addDecimal();
    } else {
      buttonEl.onclick = () => addValue(button);
    }

    keyBoardEl.appendChild(buttonEl);
  });
  keyBoardEl.classList.add('keyboard-container');
}

const calculate = () => screenEl.innerText.length ? screenEl.innerText = eval(screenEl.innerText) : '';
const sqrtFun = () => screenEl.innerText = screenEl.innerText.length ? `sqrt(${screenEl.innerText})` : '';
const pow2 = () => screenEl.innerText = screenEl.innerText.length ? `pow(${screenEl.innerText}, 2)` : '';
const pow3 = () => screenEl.innerText = screenEl.innerText.length ? `pow(${screenEl.innerText}, 3)` : '';
const undo = () => screenEl.innerText = screenEl.innerText.slice(0, -1);
const clear = () => screenEl.innerText = '';
const addDecimal = () => !screenEl.innerText.includes('.') ? screenEl.innerText+='.' : '';
const addValue = (value) => screenEl.innerText+=value;

loadCalculator();