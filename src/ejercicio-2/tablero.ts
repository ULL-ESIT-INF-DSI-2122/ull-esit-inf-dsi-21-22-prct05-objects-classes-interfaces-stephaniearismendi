import {Jugador} from './jugador';

export type Cell = 'X' | 'O' | ' ';
type Board = [[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell]];

export class Tablero {
  private ncolumnas_ = 7;
  private nfilas_ = 6;
  private boardState:Board;
  constructor() {
    this.boardState = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];
  }
  public isColumnFull(position:number):boolean {
    let resultado:boolean = true;
    for (let i = 0; i < this.nfilas_; i++) {
      if (this.boardState[i][position] == ' ') {
        resultado = false;
      }
    }
    return resultado;
  }
  /**
   * Función que comprueba si hay 4 fichas horizontalmente
   * @returns true if 4 en horizontal
   */
  public checkHorizontal():boolean {
    let resultado:boolean = false;
    let consecutivas:number = 0;
    for (let i = 0; i < this.nfilas_; i++) {
      for (let j = 0; j < this.ncolumnas_; j++) {
        if (this.boardState[i][j] != ' ' && this.boardState[i][(j + 1)] != ' ') {
          if (this.boardState[i][j] == this.boardState[(i)][(j+1)]) {
            consecutivas++;
            if (consecutivas >= 3) { // es 3 porque son 4 contando la propia ficha
              resultado = true;
            }
          } else {
            consecutivas = 0;
          }
        }
      }
    }
    return resultado;
  }

  public checkVertical():boolean {
    let resultado:boolean = false;
    let consecutivas:number = 0;
    for (let i = 0; i < this.ncolumnas_; i++) {
      for (let j = 0; j < this.nfilas_; j++) {
        if ((this.boardState[j][i] != ' ') && (this.boardState[(j)][i] != ' ') && ((j+1) < this.nfilas_)) {
          if (this.boardState[j][i] == this.boardState[(j + 1)][i]) {
            consecutivas++;
            if (consecutivas >= 3) { // es 3 porque son 4 contando la propia ficha
              resultado = true;
            }
          } else {
            consecutivas = 0;
          }
        }
      }
    }
    return resultado;
  }

  public colocarColumna(columna:number, jugador:Jugador):string {
    const mensaje:string = 'Ficha añadida';
    const mensajeLleno:string = 'Columna llena';
    if (!this.isColumnFull(columna)) {
      for (let i = (this.nfilas_ - 1); i >= 0; i--) {
        if (this.boardState[i][columna] == ' ') {
          this.boardState[i][columna] = jugador.getSimbolo();
          i = 0;
        }
      }
    }
    if (this.isColumnFull(columna)) {
      return mensajeLleno;
    } else {
      return mensaje;
    }
  }
  public print():void {
    let arrText:Cell = ' ';
    for (let i = 0; i < this.boardState.length; i++) {
      for (let j = 0; j < this.boardState[i].length; j++) {
        arrText += this.boardState[i][j] + ' ';
      }
      console.log(arrText);
      arrText=' ';
    }
  }
}