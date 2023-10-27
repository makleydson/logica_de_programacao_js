let number = parseInt(prompt("Você deseja a tabuada de que número?"));
let index = 11;

do {
  document.write (number + ' X ' + index + ' = ' + (number*index) + '<br>');
  index = index+1;
} while (index <= 10)

document.write ("Obrigado!");