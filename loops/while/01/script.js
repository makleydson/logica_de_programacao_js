let number = parseInt(prompt("Você deseja a tabuada de que número?"));
let index = 1;

while (index <= 100) {
  document.write (number + ' X ' + index + ' = ' + (number*index) + '<br>');
  
  if (index % 10 === 0 && index > 0) {
    document.write('<hr>');
  }
  
  index = index+1;
}

document.write ("Obrigado!");