let output = document.querySelector('#output');
let mensagem = '';

for (let i = 0; i <= 1000; i++) {
  mensagem += 'i: ' + i + '<br>';
}

output.innerHTML = mensagem;