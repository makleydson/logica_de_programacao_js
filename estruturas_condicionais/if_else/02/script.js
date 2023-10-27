let player1 = parseInt(prompt("P1, digite o seu número:"));
let player2 = parseInt(prompt("P2, digite o seu número: "));

var sort = parseInt(Math.random()*2);
alert(sort);

if (player1 == player2) {
  alert("Empate, joguem novamente!");
} else if (player1 > player2 && sort == 1) {  
  alert("P1 Venceu, parabéns!");
} else if (player1 < player2 && sort == 0) {
  alert("P1 Venceu, parabéns!");
} else {
  alert("P2 venceu, parabéns!");
}