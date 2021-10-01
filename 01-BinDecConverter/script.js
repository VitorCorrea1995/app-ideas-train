const computeBtn = document.getElementById('computeBtn');
const toggleBtn = document.getElementById('toggleBtn');

const binInput = document.getElementById('binInput');
const decInput = document.getElementById('decInput');

let isBinDisabled = true;
binInput.disabled = isBinDisabled;

const bin2Dec = () => {
  return parseInt(binInput.value, 2);
}

const dec2Bin = () => {
  return Number(decInput.value).toString(2);
}

const compute = () => {
  if (isBinDisabled) {
    binInput.value = dec2Bin();
    return;
  }

  decInput.value = bin2Dec();
}

const toggle = () => {
  binInput.value = "";
  decInput.value = "";
  isBinDisabled = !isBinDisabled;
  
  binInput.disabled = isBinDisabled;
  decInput.disabled = !isBinDisabled;
}

computeBtn.addEventListener('click', compute);
toggleBtn.addEventListener('click', toggle);