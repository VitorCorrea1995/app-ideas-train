const translateBtn = document.getElementById('translate');
const clearBtn = document.getElementById('clear');
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');


const clear = () => {
  inputEl.value = '';
  outputEl.innerText = '';
};

const translate = () => {
  let outputTxt = inputEl.value;
  for (const [emojiChar, emoji] of Object.entries(EMOJI_MAP)) {
    while (outputTxt.includes(emojiChar)) {
      outputTxt = outputTxt.replace(emojiChar, emoji);
    }
  }
  outputEl.innerText = outputTxt;
};

clearBtn.addEventListener('click', clear);
translateBtn.addEventListener('click', translate);