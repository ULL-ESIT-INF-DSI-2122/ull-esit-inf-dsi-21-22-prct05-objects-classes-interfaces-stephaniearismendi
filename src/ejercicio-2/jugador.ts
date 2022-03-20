import {Cell} from './tablero';

export class Jugador {
  private simbolo:Cell;
  private fichas:number = 21;
  constructor(simbolo:Cell) {
    this.simbolo = simbolo;
  }
  public getSimbolo():Cell {
    return this.simbolo;
  }
  public fichaMenos():void {
    this.fichas--;
  }
  public getNumFichas():number {
    return this.fichas;
  }
}