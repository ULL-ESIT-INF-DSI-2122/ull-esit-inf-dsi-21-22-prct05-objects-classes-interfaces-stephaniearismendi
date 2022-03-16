/**
 * clase racional que crea un objeto con los parametros
 * numerador y denominador, ambos number
 */
export class Racionales {
  numerador:number;
  denominador:number;
  constructor(numerador:number, denominador:number) {
    this.numerador = numerador;
    this.denominador = denominador;
  }
  /**
   * función que recibiendo un objeto número lo simplifica
   * @param numero
   * @returns string
   */
  public simplificar(numero:Racionales):string {
    let numeroSimplificado:string = '';
    let newNumerador:number = 0;
    let newDenominador:number = 0;
    let min:number = 0;
    let ismultiplo:boolean = false;
    let multiplo:number = 0;
    if (numero.numerador > numero.denominador) {
      min = numero.denominador;
    } else {
      min = numero.numerador;
    }
    let i:number =2;
    while (i <= min && ismultiplo == false) {
      if (numero.numerador % i == 0 && numero.denominador % i == 0) {
        multiplo = i;
        ismultiplo = true;
      }
      i++;
    }
    if (ismultiplo == true) {
      newNumerador=numero.numerador/multiplo;
      newDenominador=numero.denominador/multiplo;
    } else {
      newNumerador = numero.numerador;
      newDenominador = numero.denominador;
    }
    numeroSimplificado = newNumerador + '/' + newDenominador;
    return numeroSimplificado;
  }
  /**
   * función que retorna true si el denominador no es cero, ya que un numero
   * racional no puede tener un denominador 0
   * @param numero
   * @returns true or false
   */
  public isvalid(numero:Racionales):boolean {
    if (numero.denominador == 0) {
      return false;
    } else {
      return true;
    }
  }
  /**
   * función que retorna el número al revés
   */
  public inverse(numero:Racionales):string {
    let numeroInverso:string = '';
    numeroInverso = numero.denominador + '/' + numero.numerador;
    return numeroInverso;
  }
  /**
   * función que retorna la suma de dos números
   * @param numero1
   * @param numero2
   * @returns
   */
  public add(numero1:Racionales, numero2:Racionales):string {
    let newNumerador = 0;
    let newDenominador = 0;
    let result:string = '';
    newNumerador = (numero1.numerador * numero2.denominador) +
    (numero1.denominador * numero2.numerador);
    newDenominador = numero1.denominador * numero2.denominador;
    const resultado = new Racionales(newNumerador, newDenominador);
    result = resultado.simplificar(resultado);
    return result;
  }
  /**
   * función que divide dos números racionales y retorna el resultado
   * en un string
   * @param numero1
   * @param numero2
   * @returns
   */
  public sub(numero1:Racionales, numero2:Racionales):string {
    let newNumerador = 0;
    let newDenominador = 0;
    let result:string = '';
    newNumerador = (numero1.numerador * numero2.denominador) -
     (numero2.numerador * numero1.denominador);
    newDenominador = numero1.denominador * numero2.denominador;
    const resultado = new Racionales(newNumerador, newDenominador);
    result = resultado.simplificar(resultado);
    return result;
  }
  /**
   * función que multiplica dos números racionales y retorna el resultado
   * como un string
   * @param numero1
   * @param numero2
   * @returns
   */
  public multiply(numero1:Racionales, numero2:Racionales):string {
    let newNumerador = 0;
    let newDenominador = 0;
    let result:string = '';
    newNumerador = numero1.numerador * numero2.numerador;
    newDenominador = numero2.denominador * numero1.denominador;
    // const resultado = new Racionales(newNumerador, newDenominador);
    result = newNumerador + '/' + newDenominador;
    return result;
  }
  /** función que imprime el número racional por pantalla */
  public print(numero:Racionales):string {
    let result:string = '';
    result = numero.numerador + '/' + numero.denominador;
    return result;
  }
  /**
   * función que divide dos números racionales
   * @param numero1
   * @param numero2
   * @returns
   */
  public div(numero1:Racionales, numero2:Racionales):string {
    let newNumerador:number = 0;
    let newDenominador:number = 0;
    newNumerador = numero1.numerador * numero2.denominador;
    newDenominador = numero1.denominador * numero2.numerador;
    const resultado = new Racionales(newNumerador, newDenominador);
    const result:string = resultado.simplificar(resultado);
    return result;
  }
}