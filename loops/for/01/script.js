let number = parseInt(prompt("Você deseja a tabuada de que número?"));

for (let i = 1; i <= 10; i++) {
  document.write (number + ' X ' + i + ' = ' + (number*i) + '<br>');
}

document.write ("Obrigado!");