let nota1 = parseFloat(prompt("Por favor, digite sua primeira nota:"));
let nota2 = parseFloat(prompt("Por favor, digite sua segunda nota:"));
let nota3 = parseFloat(prompt("Por favor, digite sua terceira nota:"));

let media = (nota1+nota2+nota3)/3;

if (media >= 7) {
  alert("Parabéns, você foi aprovado! :D");
} else if (media >= 5) {
  alert("Você está em recuperação! :|");
} else {
  alert("Que pena, Você reprovou! :(");
}
