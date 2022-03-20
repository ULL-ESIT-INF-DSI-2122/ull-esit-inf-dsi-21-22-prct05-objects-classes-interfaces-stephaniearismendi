import {Tablero} from './tablero';
import {Jugador} from './jugador';

const Jugador1 = new Jugador('X');
const Jugador2 = new Jugador('O');
const Malla = new Tablero();
const scanf = require('scanf');


console.log('Bienvenidos al tres en raya. Inicialmente el tablero está completamente vacío.');
console.log('Nota: para añadir fichas se tiene en cuenta el cero');
while (Jugador1.getNumFichas() > 0 && Jugador2.getNumFichas() > 0 &&
(Malla.checkHorizontal() == false) && (Malla.checkVertical() == false)) {
  console.log('Jugador 1, ¿En qué columna quieres introducir la ficha?');
  let columna = scanf('%d');
  while (Malla.isColumnFull(columna)) {
    console.log('Introduzca otra columna');
    columna = scanf('%d');
  }
  console.log(Malla.colocarColumna(columna, Jugador1));
  Jugador1.fichaMenos();
  Malla.print();
  if (Malla.checkHorizontal()) {
    console.log('Ha ganado el jugador uno. 4 en raya horizontal');
  }
  if (Malla.checkVertical()) {
    console.log('Ha ganado el Jugador uno. 4 en raya vertical');
  }
  console.log('Jugador 2, ¿En qué columna quieres introducir la ficha?');
  let columna2 = scanf('%d');
  while (Malla.isColumnFull(columna2)) {
    console.log('Introduzca otra columna');
    columna2 = scanf('%d');
  }
  console.log(Malla.colocarColumna(columna2, Jugador2));
  Jugador2.fichaMenos();
  Malla.print();
  if (Malla.checkHorizontal()) {
    console.log('Ha ganado el jugador dos. 4 en raya horizontal');
  }
  if (Malla.checkVertical()) {
    console.log('Ha ganado el Jugador dos. 4 en raya vertical');
  }
}
if (Jugador1.getNumFichas() <= 0) {
  console.log('Al jugador 1 se le han acabado las fichas. Juego terminado.');
}
if (Jugador2.getNumFichas() <= 0) {
  console.log('Al jugador 2 se le han acabado las ficha. Juego terminado.');
}
