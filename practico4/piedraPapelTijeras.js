const readline = require('readline-sync');

// Función para obtener la jugada de la computadora
function obtenerJugadaComputadora() {
  const jugadas = ["piedra", "papel", "tijeras"];
  const indice = Math.floor(Math.random() * 3);
  const jugadaComputadora = jugadas[indice];
  return jugadaComputadora;
}

// Función para obtener la jugada del usuario
function obtenerJugadaUsuario() {
  const jugadaUsuario = readline.question("Ingresa tu jugada: piedra, papel o tijeras: ");
  return jugadaUsuario;
}

// Función para determinar el ganador
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

// Llamar a las funciones en el orden adecuado para ejecutar el juego
const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

// Imprimir el resultado del juego
console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);