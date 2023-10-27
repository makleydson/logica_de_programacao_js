let number = parseInt(prompt("Você deseja a tabuada de que número?"));
let index = 1;

while (index <= 10) {
  alert (number + ' X ' + index + ' = ' + (number*index) + '\n');
  index = index+1;
}

alert ("Obrigado!");