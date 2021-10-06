const BREAK_LINE = '\n';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

const toCSVBtn = document.getElementById('toCSVBtn');
const toJSONBtn = document.getElementById('toJSONBtn');
const uploadBtn = document.getElementById('uploadBtn')
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');
const copyToClipboardBtn = document.getElementById('copyClipboardBtn');

const _getInput = () => inputEl.value;
const _getOutput = () => outputEl.value;

const _setInput = (value) => inputEl.value = value; 
const _setOutput = (value) => outputEl.value = value; 

const isJSON = (value) => {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}

const toJSON = () => {
  if (isJSON(_getInput())) {
    return _setOutput(_getInput());
  }

  const JSONObjects = [];
  try {
    const inputRows = (_getInput()).split(BREAK_LINE);
    const headers = inputRows[0].split(',');

    inputRows.shift();
  
    inputRows.forEach(inputRow => {
      const el = {};
      const values = inputRow.split(',');

      for (i = 0; i < headers.length; i++) {
        el[headers[i]] = values[i];
      }

      JSONObjects.push(el);
  });

    return _setOutput(JSON.stringify(JSONObjects).replace('"', '').replace('\\', ''));
  } catch (error) {
    console.error(error);
    return _setOutput('Invalid input!');
  }
}

const toCSV = () => {
  try {
    if (!isJSON(_getInput())) {
      return _setOutput(_getInput());
    }

    let csv = '';
    const parsedInput = JSON.parse(_getInput());

    if (Array.isArray(parsedInput)) {
      const headers = Object.keys(parsedInput[0]);

      csv += headers.join(', ') + BREAK_LINE;

      parsedInput.forEach(row => {
        csv += Object.values(row).join(', ') + BREAK_LINE;
      });
      
      return _setOutput(csv);
    }

    const headers = Object.keys(parsedInput);
    csv += headers.join(', ') + BREAK_LINE;
    csv += Object.values(parsedInput).join(', ') + BREAK_LINE;

    return _setOutput(csv);
  } catch (error) {
    console.error(error);
    return _setOutput('Invalid input!');
  }
}

const clear = () => {
  _setInput('');
  _setOutput('');
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(_getOutput());
}

const download = () => {
  clear();
  _setInput('TO DO: DOWNLOAD!');
  _setOutput('TO DO: DOWNLOAD!');
}

const upload = () => {
  clear();
  _setInput('TO DO: UPLOAD!');
  _setOutput('TO DO: UPLOAD!');
}

toCSVBtn.addEventListener('click', toCSV);
toJSONBtn.addEventListener('click', toJSON);
clearBtn.addEventListener('click', clear);
uploadBtn.addEventListener('click', upload);
downloadBtn.addEventListener('click', download);
clearBtn.addEventListener('click', clear);
copyToClipboardBtn.addEventListener('click', copyToClipboard);