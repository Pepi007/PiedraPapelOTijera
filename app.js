// definiendo variables
let userInput;
let computerAnswer;
let result;
let eleccion;
let eleccionU
// definiendo variables

// respuestas usuario
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
// respuestas usuario

// asignando los botones a las respuestas
piedra.addEventListener("click", function () {
  userInput = "PIEDRA";
  console.log('piedra');
});

papel.addEventListener("click", function () {
  userInput = "PAPEL";
  console.log('papel');
});

tijera.addEventListener("click", function () {
  userInput = "TIJERA";
  console.log('tijera');
});
// asignando los botones a las respuestas

// ejecutar el juego
var juego = document.getElementById('jugar');


juego.addEventListener('click', function (){
  number = Math.random() * 2;
  number = Math.round(number);
  if (number === 0) {
    computerAnswer = "PIEDRA";
  } else if (number === 1) {
    computerAnswer = "PAPEL";
  } else {
    computerAnswer = "TIJERA";
  } console.log(computerAnswer)
});

var eleccionPc = document.getElementById('eleccionPc');
var resultado = document.getElementById('resultado');
var eleccionUsuario = document.getElementById('eleccionUsuario');


juego.addEventListener("click", function () {
  if (userInput === computerAnswer) {
    resultado.textContent = 'Es un empate';
    eleccionPc.textContent = 'El hizo: '+ computerAnswer.toLowerCase();

  } else if (userInput === "PIEDRA" && computerAnswer === "TIJERA") {
    resultado.textContent = 'Ganaste';
    eleccionPc.textContent = 'El hizo: tijera';

  } else if (userInput === "PAPEL" && computerAnswer === "PIEDRA" ) {
    resultado.textContent = 'Ganaste';
    eleccionPc.textContent = 'El hizo: Piedra';

  } else if (userInput === "TIJERA" && computerAnswer === "PAPEL"  ) {
    resultado.textContent = 'Ganaste';
    eleccionPc.textContent = 'El hizo: Papel';

  } else if (computerAnswer === "TIJERA" && userInput === "PAPEL"){
    resultado.textContent = 'Perdiste';
    eleccionPc.textContent = 'El hizo: Tijera';

  } else if (computerAnswer === 'PIEDRA' && userInput === 'TIJERA') {
    resultado.textContent = 'Perdiste';
    eleccionPc.textContent = 'El hizo: Piedra';

  } else if (computerAnswer === 'PAPEL' && userInput === 'PIEDRA') {
    resultado.textContent = 'Perdiste';
    eleccionPc.textContent = 'El hizo: Papel';

  } eleccionUsuario.textContent = "Elegiste: " + userInput.toLowerCase();
});

// ejecutar el juego
