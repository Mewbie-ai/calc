const display = document.getElementById('display')
const display_top = document.getElementById('display_top')
const display_bot = document.getElementById('display_bot')
const display_mode = document.getElementById('display_mode')
let back = [], operator = '', number = 0, newNumber, sum = 0;

//num
document.querySelectorAll('#number').forEach(num => num.onclick = () => {
  if (num.textContent == '0' && display.textContent == '0') return;
  else if(num.textContent == '000' && display.textContent == '') {
    display.textContent = '0';
    return;
  } else if(num.textContent != '0' && display.textContent == '0') {
    display.textContent = '';
  }
  if (num.textContent == '.'){

  }
  display.textContent += num.textContent;
  sum = display.textContent
})
//op
document.querySelectorAll('#operator').forEach(op => op.onclick = () => {
  if (!display.textContent) {
    operator = op.textContent;
    display_mode.textContent = op.textContent;
    return;
  }
  newNumber = display.textContent;
  display_top.textContent = display.textContent;
  display_mode.textContent = op.textContent;
  back = []
  // calculate
  if (number != null && operator != "") {
    if(operator == '÷' && (number == 0 || newNumber == 0)){
      return alert('infinity, duh')
    }
    sum = operate(number, newNumber, operator);
    display.textContent = sum;

  }
  if (op.textContent != '=')j
    operator = op.textContent;

  // reset
  number = newNumber;
  newNumber = '';
  if (operator != '' && op.textContent != '=') {
    display.textContent = "";
  }
  if (op.textContent == '=') {
    operator = '';
    display_top.textContent = '';
  } else if (sum) {
    display_top.textContent = sum;
    number = sum;
  }
})

const operate = (a,b,op) => {
  a = parseFloat(a);
  b = parseFloat(b);
  const add = (x, y) => x + y;
  const substract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;
  switch(op) {
    case '+':
      return add(a,b)  
    case '-':
      return substract(a,b)
    case '×':
      return multiply(a,b)
    case '÷':
      return divide(a,b)
    default:
      return
  }
}
//redo
document.querySelector('.redo').onclick = () => {
  if(back == '') {
    return
  }
  display.textContent += back.pop();
}
//undo
document.querySelector('.undo').onclick = () => {
  if (display.textContent != ''){
    back.push(display.textContent.slice(-1));
    display.textContent = display.textContent.slice(0, -1);
  } else if(display_top.textContent != "" && display.textContent == "") {
    display.textContent = number
    display_top.textContent = ""
    number = 0
  }
}



////////////////////// features /////////////////////////////////////

document.querySelectorAll("#feature").forEach(feat => feat.onclick = () => {
  switch(feat.textContent) {
    case "ON":
      display_bot.classList.toggle('off')
      break
    case "AC":
      document.getElementById('ac').classList.toggle('on')
      break
    case "+/-":
      if(display.textContent){
        sum *= -1
        display.textContent = sum
      }
      break
    case "C":
      sum = 0
      display.textContent = sum
      display_top.textContent = ''
      operator = ''
      break
    case "%":
      sum /= 100
      display.textContent = sum
      break
  }
})

// keyboard support

window.addEventListener('keydown', (e) => {
  
})