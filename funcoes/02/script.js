let output = document.querySelector('#output');
let number1 = parseFloat(prompt("Digite o primeiro número: "));

function soma() {
  let number2 = parseFloat(prompt("Digite o segundo número: "));
  let soma = number1+number2;
  output.innerHTML = `A soma entre os dois números é ${soma}`;
}

function sub() {
  let number2 = parseFloat(prompt("Digite o segundo número: "));
  let sub = number1-number2;
  output.innerHTML = `A subtração entre os dois números é ${sub}`;
}

function mult() {
  let number2 = parseFloat(prompt("Digite o segundo número: "));
  let mult = number1*number2;
  output.innerHTML = `A multiplicação entre os dois números é ${mult}`;
}

function divi() {
  let number2 = parseFloat(prompt("Digite o segundo número: "));
  let divi = (number1/number2).toFixed(2);
  output.innerHTML = `A divisão entre os dois números é ${divi}`;
}