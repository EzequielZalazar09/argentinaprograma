const readline = require('readline-sync');

function obtenerJugadaComputadora() {
  const jugadas = ["piedra", "papel", "tijeras"];
  const indice = Math.floor(Math.random() * 3);
  const jugadaComputadora = jugadas[indice];
  return jugadaComputadora;
}

function obtenerJugadaUsuario() {
  const jugadaUsuario = readline.question("Ingresa tu jugada: piedra, papel o tijeras: ");
  return jugadaUsuario;
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
} else if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);
