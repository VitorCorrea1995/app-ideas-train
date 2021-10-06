const result = document.getElementById('result');

const quantityEl = document.getElementById('quantity');
quantityEl.value = 0;
/*const paragraphsOption = document.getElementById('paragraphs');
const wordsOption = document.getElementById('words');
const bytesOption = document.getElementById('bytes');
const listsOption = document.getElementById('lists');*/

const generateBtn = document.getElementById('generate-btn');

const generateLorem = (option, quantity) => {
  if (option ===  OPTIONS.PARAGRAPH) {
    return LOREM_PARAGRAPHS.slice(0, quantity).join('\r\n');
  } else if (option === OPTIONS.WORDS) {
    return LOREM_WORDS.sort(() => 0.5 - Math.random()).slice(0, quantity).join(' ; ');
  }
  
  return "";
}

const generate = () => {
  const optionEl = document.querySelector('input[name="options"]:checked');
  let option;
  if (optionEl) {
    option = optionEl.value;
  }
  
  const lorem = generateLorem(option, quantityEl.value);

  result.innerHTML = lorem;
}


generateBtn.addEventListener('click', generate);