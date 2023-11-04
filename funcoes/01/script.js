let output = document.querySelector('#output');
let messenger = '';

function mostrarTabuada() {
  //perguntar o numero para o usuário e converter para number.
  let number = parseFloat(prompt("Qual tabuada você deseja?"));
  //criar uma variável que servirá de índice.
  let i = 1;
  //enquanto indice <=10.
    //concatena na variável mensagem.
  while(i <= 10) {
    messenger += number + " X " + i + " = " + (number*i) + "<br>";
    i++;
  }
  //mostrar a mensagem no output.
  output.innerHTML = messenger;
}

function limparTabuada() {
  messenger = "";
  output.innerHTML = messenger;
}