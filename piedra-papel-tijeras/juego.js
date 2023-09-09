function jugador() {
  let eleccionJugador = prompt("Piedra, Papel o Tijeras");
  return eleccionJugador.toLowerCase();
}

function ordenador() {
  let eleccionOrdenador = ["piedra", "papel", "tijeras"];
  let indice = Math.floor(Math.random() * 3);
  return eleccionOrdenador[indice];
}

function determinarGanador(Jugador, Ordenador) {
  if (Jugador === Ordenador) {
    return "Empate";
  } else if (
    (Jugador === "piedra" && Ordenador === "tijeras") ||
    (Jugador === "papel" && Ordenador === "piedra") ||
    (Jugador === "tijeras" && Ordenador === "papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "Perdiste";
  };
};

function comenzarJuego() {
  let jugadorJuego = jugador();
  let ordenadorJuego = ordenador();

  alert("La maquina eligió " + ordenadorJuego);

  const resultado = determinarGanador(jugadorJuego, ordenadorJuego);

  alert(resultado);
}

comenzarJuego();
