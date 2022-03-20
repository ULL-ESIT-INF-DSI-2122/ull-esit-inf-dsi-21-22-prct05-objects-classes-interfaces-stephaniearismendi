import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../src/ejercicio-2/tablero';
import {Jugador} from '../src/ejercicio-2/jugador';

const Jugador1 = new Jugador('X');
const Jugador2 = new Jugador('O');
const Malla = new Tablero();

describe('Tres en raya tests: ', () => {
  it('Prueba getSimbolo -> "X"', () =>{
    expect(Jugador1.getSimbolo()).to.be.equal('X');
  });
  it('Prueba getSimbolo -> "O"', () =>{
    expect(Jugador2.getSimbolo()).to.be.equal('O');
  });
  it('Prueba isColumnFull -> false (porque inicialmente está vacío)', () =>{
    expect(Malla.isColumnFull(1)).to.be.false;
  });
  it('Prueba CheckHorizontal -> false', () =>{
    expect(Malla.checkHorizontal()).to.be.false;
  });
  it('Prueba ColocarColumna -> Si añade la ficha, retorna ficha añadida', () =>{
    expect(Malla.colocarColumna(1, Jugador1)).to.be.equal('Ficha añadida');
  });
  it('Prueba checkVertical -> false', () =>{
    expect(Malla.checkVertical()).to.be.false;
  });
  it('Prueba print. Debe imprimir undefined.', () =>{
    expect(Malla.print()).to.be.undefined;
  });
  it('Prueba fichaMenos -> expect to decrease ', () =>{
    expect(Jugador1.fichaMenos()).to.decrease;
  });
});