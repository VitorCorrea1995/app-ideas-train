const upLeftInput = document.getElementById('up-left');
const upRightInput = document.getElementById('up-right');
const downRightInput = document.getElementById('down-right');
const downLeftInput = document.getElementById('down-left');

const resultPanel = document.getElementById('result');

const btnCopy = document.getElementById('btn-copy');

const copyBorderValuesToClipboard = () => {
  const upLeftValue = upLeftInput.value ? upLeftInput.value : 0;
  const upRightValue = upRightInput.value ? upRightInput.value : 0;
  const downRightValue = downRightInput.value ? downRightInput.value : 0;
  const downLeftValue = downLeftInput.value ? downLeftInput.value : 0;
  
  const textBorder = `border-radius: ${upLeftValue}px ${upRightValue}px ${downRightValue}px ${downLeftValue}px;`;

  navigator.clipboard.writeText(textBorder);
};

const setBorderRadiusOfResultPanel = () => {
  resultPanel.style["borderTopLeftRadius"] =  upLeftInput.value + "px";
  resultPanel.style["borderTopRightRadius"] =  upRightInput.value + "px";
  resultPanel.style["borderBottomRightRadius"] =  downRightInput.value + "px";
  resultPanel.style["borderBottomLeftRadius"] =  downLeftInput.value + "px";
};

upLeftInput.addEventListener('input', setBorderRadiusOfResultPanel);
upRightInput.addEventListener('input', setBorderRadiusOfResultPanel);
downRightInput.addEventListener('input', setBorderRadiusOfResultPanel);
downLeftInput.addEventListener('input', setBorderRadiusOfResultPanel);

btnCopy.addEventListener('click', copyBorderValuesToClipboard)