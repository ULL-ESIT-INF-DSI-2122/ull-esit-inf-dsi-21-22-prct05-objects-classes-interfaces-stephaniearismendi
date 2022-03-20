## Práctica 4 - Objetos, clases e interfaces.

En esta práctica resolveremos una serie de ejercicios de programación que nos permitirán conocer más en profundidad los Objetos, las clases e interfaces en TypeScript.

### Ejercicio 1 - Pokedex.

A partir del `Ejercicio 8` realizado en la [Práctica 3](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-stephaniearismendi/blob/main/src/ejercicio-8.ts), cree la estructura de clases e interfaces que considere oportuna para representar el siguiente escenario:

Se pide crear una Pokedex donde se almacene la información relacionada con distintos Pokemons. Para cada Pokemon, se deben almacenar los siguientes elementos de información:

- Nombre del Pokemon
- Peso y altura
- Tipo
- Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP). Puede encontrar información relativa aquí.

Por último, diseñe una clase Combat que simule el combate entre dos Pokemons. Para ello, un objeto de dicha clase deberá ser construido con dos contrincantes. Además, reescriba la función del Ejercicio 8 de la Práctica 3 como un método de esta clase. Incluya también un método start dentro de la clase Combat que realice la simulación del combate. Este método se basará en lo siguiente:

- Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
- Se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque.
- El método deberá mostrar por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante.

Para solventar la prácitca se ha llevado a cabo la elaboración de dos clases: `Combat` y `Pokémon`. En la segunda se almacenará la información relacionada con los mismos, como es el nombre, el peso y la altura, el tipo o las estadísticas básicas. El esquema vendría a ser el siguiente:

```typescript
class Pokemon {
  name:string;
  height:number;
  weight:number;
  type:string;
  attack:number;
  defense:number;
  velocity:number;
  HP:number;
  constructor(name:string, height:number, weight:number,
      type:string, attack:number, defense:number, velocity:number, HP:number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.velocity = velocity;
    this.HP = HP;
  }
```
Como podemos observar, las únicas variables declaradas son las de la información relevante. A su vez serán actualizadas en el constructor. Respecto a los métodos, en esta clase solo se han implementado `getters` y `setters`.

Seguidamente pasaremos a la clase `Combat`, donde se llevará a cabo todo el desarrollo de la batalla.

Como declaración hay una serie de arrays, que contienen ataques de cada tipo de pokémon. Además, un constructor qeu recibe dos objetos `Pokémon` y un array `Combate`.

Antes de hablar sobre la función `start`, la principal, pasaremos por las demás. Primero tenemos `ataque_aleatorio`, que es donde se usarán los arrays mencionados anterioremtne. Se recoge un número totalmente aleatorio y, según el tipo del pokémon recibido, se devolverá un elemento del array. El código es el siguiente:

```typescript
  public ataque_aleatorio(pokemon:Pokemon):string {
    let ataque:string = '';
    const rand = Math.floor(Math.random()* 4);
    if (pokemon.type == 'fuego') {
      ataque = this.ataques_fuego[rand];
    } else if (pokemon.type == 'planta') {
      ataque = this.ataques_planta[rand];
    } else if (pokemon.type == 'agua') {
      ataque = this.ataques_agua[rand];
    } else if (pokemon.type == 'electrico') {
      ataque = this.ataques_electrico[rand];
    }
    return ataque;
  }
  ```

Respecto a `eficacia` vuelve a ser una función auxiliar, que nos sirve únicamente para complementar el texto del combate. Según el tipo del pokémon atacante, y el tipo del del rival, nos devuelve un string con distintos dialogos. Por ejemplo, electrico contra agua devolverá '¡Es muy eficaz!'.

```typescript

  public eficacia(pokemon1:Pokemon, pokemon2:Pokemon):string {
    let eficacia:string = '';
    if (pokemon1.type == 'agua' && pokemon2.type == 'fuego') {
      eficacia = '¡Es muy eficaz!';
    } else if (pokemon1.type == 'agua' && pokemon2.type == 'electrico') {
      eficacia = 'No es muy eficaz';
    } else if (pokemon1.type == 'agua' && pokemon2.type == 'planta') {
      eficacia = 'No es muy eficaz';
    } else if (pokemon1.type == 'fuego' && pokemon2.type == 'agua') {
      eficacia = 'No es muy eficaz';
    } else if (pokemon1.type == 'fuego' && pokemon2.type == 'planta') {
      eficacia = '¡Es muy Eficaz!';
    } else if (pokemon1.type == 'planta' && pokemon2.type == 'agua') {
      eficacia = '¡Es muy eficaz!';
    } else if (pokemon1.type == 'planta' && pokemon2.type == 'fuego') {
      eficacia = 'No es muy eficaz';
    } else if (pokemon1.type == 'electrico' && pokemon2.type == 'agua') {
      eficacia = '¡Es muy eficaz!';
    } else {
      eficacia = '';
    }
    return eficacia;
  }
```

Lo mismo con `comprobar_debilitado` y `comprobar_ps`, que sirven para comprobar si un pokémon ha caído debilitado y notificarlo por pantalla (además de devolver una variable booleana), y `comprobar_ps`, que nos auxilia con el texto del combate. Esto nos servirá para llevar un control de la vida de ambos pokémon durante la realización del mismo.

```typescript
  public comprobar_debilitado():boolean {
    let debilitado:boolean = false;
    if (this.pokemon1.get_hp() <= 0) {
      console.log(this.pokemon1.get_name() + ' se ha debilitado.');
      debilitado = true;
    } else if (this.pokemon2.get_hp() <= 0) {
      console.log(this.pokemon2.get_name() + ' se ha debilitado.');
      debilitado = true;
    }
    return debilitado;
  }
```
```typescript
  public comprobar_ps() {
    if (this.pokemon1.get_hp() > 0) {
      console.log('A ' + this.pokemon1.get_name() +
         ' le quedan ' + this.pokemon1.get_hp() + ' PS');
    }
    if (this.pokemon2.get_hp() > 0) {
      console.log('A ' + this.pokemon2.get_name() +
          ' le quedan ' + this.pokemon2.get_hp() + ' PS.');
    }
  }
```

Las siguientes funciones son las implementadas en una práctica anterior, reutilizadas en esta ocasión. Estas son `pokemonBattle` y `damage`, que van de la mano. La primera valora, con una serie de switches, los diferentes escenarios del pokémon atacante respecto al defensor. Según sus tipos, llama a la función `damage` y, con la formula, calcula el daño total causado.

```typescript
 public pokemonBattle(myType:string, theirType:string,
      myAttack:number, theirDefense:number):number {
    let totalDamage = 0;
    switch (myType) {
      case 'fuego': {
        switch (theirType) {
          case 'fuego': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
          case 'agua': {
            totalDamage = this.damage(myAttack, theirDefense, 0.5);
            break;
          }
          case 'planta': {
            totalDamage = this.damage(myAttack, theirDefense, 2);
            break;
          }
          case 'electrico': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
        }
        break;
      }
      case 'agua': {
        switch (theirType) {
          case 'fuego': {
            totalDamage = this.damage(myAttack, theirDefense, 2);
            break;
          }
          case 'agua': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
          case 'planta': {
            totalDamage = this.damage(myAttack, theirDefense, 0.5);
            break;
          }
          case 'electrico': {
            totalDamage = this.damage(myAttack, theirDefense, 0.5);
            break;
          }
        }
        break;
      }
      case 'planta': {
        switch (theirType) {
          case 'fuego': {
            totalDamage = this.damage(myAttack, theirDefense, 0.5);
            break;
          }
          case 'agua': {
            totalDamage = this.damage(myAttack, theirDefense, 2);
            break;
          }
          case 'planta': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
          case 'electrico': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
        }
        break;
      }
      case 'electrico': {
        switch (theirType) {
          case 'fuego': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
          case 'agua': {
            totalDamage = this.damage(myAttack, theirDefense, 2);
            break;
          }
          case 'planta': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
          case 'electrico': {
            totalDamage = this.damage(myAttack, theirDefense, 1);
            break;
          }
        }
        break;
      }
    }
    return Number(Math.round(totalDamage));
  }
```

```typescript
  public damage(attack:number, defense:number, effectiveness:number):number {
    let totalDamage:number = 0;
    totalDamage = 50 * (attack / defense) * effectiveness;
    return totalDamage;
  }
```

Finalmente tenemos la función `start`, que es la que se encargará de monitorizar el combate y hacer uso de las diferentes funciones implementadas. Esto se repetirá mientras nuestro pokémon y el de nuestro rival continúen con vida. De resto, van realizando ataques y restándoselo a su salud inicial hasta que uno caiga debilitado.

> La Pokédex está implementada como un array de *Pokémones*, donde se guardarán con todos sus datos. Al comenzar el combate se mostrará una tabla con toda la información de la misma, y los pokémon disponibles. Además, se borra de la lista al pokémon aleatorio elegido para el rival.

### Ejercicio 2 - Conecta 4

Todos (o casi todos) hemos jugado alguna vez al Conecta 4.

En una rejilla de `6 filas` y `7 columnas`, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de ``21 fichas`` de un color diferente.

En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha.

**El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.**

Cree la jerarquía de clases e interfaces necesarias para implementar el juego Conecta 4, teniendo en cuenta la siguiente funcionalidad:

- El juego comienza con el Jugador 1 colocando la primera ficha y, en turnos sucesivos, debe ir alternándose con el Jugador 2. Se deberá mostrar por consola a qué jugador le toca colocar una ficha.

- Si un jugador intenta colocar una ficha en una columna completa, se mostrará un mensaje informando de que la columna está completa y se le permitirá seleccionar otra columna para colocar la ficha. Lo anterior debe repetirse hasta que el jugador coloque su ficha.

- Una vez que el jugador correspondiente haya colocado una ficha, debe mostrarse por la consola el estado del tablero.

- Cuando alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego.

Primero creamos una clase ``Jugador``, que contendrá el número de fichasy el simbolo del jugador. ``Fichas`` siempre será 21 (inicialmente), mientras que simbolo se declarara en el constructor. Además, ``simbolo`` es del tipo `Cell`.

```typescript
export type Cell = 'X' | 'O' | ' ';
```

La clase `Jugador` sigue el siguiente esquema:

```typescript
class Jugador {
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
```

Luego, en la clase `Tablero` declaramos, también, el tipo `Board`:

```typescript

type Board = [
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell],
[Cell, Cell, Cell, Cell, Cell, Cell, Cell]];

```

Esto se utilizarápara crear el tablero, que se declara en el constructor. 

```typescript

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
```

Además, también se declara el número de filas y de columnas, que son 6 y 7 respectivamente.

Para comprobar si una columna está llena, tendremos la función `isColumnFull`. Esta recorre toda la columna, recibida como parametro, y devuelve false si hay aunque sea un hueco vacío.

```typescript

isColumnFull(position:number):boolean {
    let resultado:boolean = true;
    for (let i = 0; i < this.nfilas_; i++) {
      if (this.boardState[i][position] == ' ') {
        resultado = false;
      }
    }
    return resultado;
  }

```

Luego, tenemos la fuunción `colocarColumna`, que recibe una posición de columna y un objeto `Jugador`. Si la columna está llena se devuelve un mensaje, "Columna llena"; en cambio, si hay alguna posición vacía, introduce una ficha en la misma. La columna la recorre de abajo hacia arriba.

```typescript

colocarColumna(columna:number, jugador:Jugador):string {
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

```

También tenemos las funciones `checkHorizontal` y `checkVertical`, que comprueban si hay un cuatro en raya en una fila o columna respectivamente.

La primera, `checkHorizontal`, recorre el tablero fila a fila, y cada vez que el simbolo de la ficha actual y la de la ficha siguiente sea el mismo se sumará uno a la variable `consecutiva`. En caso contrario, se restablece a cero.

Al final, si `consecutivas` es mayor o igual a tres (ya que no cuenta la propia ficha), resutlado retornará true.

```typescript

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

```

En `checkVertical` se comprueba de igual manera, con el único cambio de que lo que se va iterando son las columnas.

```typescript

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

```

Finalmente, con `print` se imprimirá el tablero y sus respectivos símbolos.

```typescript

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

```

Luego, estas funciones son alternadas dentro de `index.ts` para el funcionamiento del juego. Mientras las fichas del primer jugador y las del segundo sean mayor que cero, y tampoco haya algún cuatro en raya, se pedirá por pantalla a cada jugador una columna en la que introducir una ficha. Si la elegida está llena, no dejará avanzar hasta que el mismo jugador escoja otra columna. Seguidamente, la introducirá en el tablero y descontará una ficha al jugador. 

El turno del jugador finaliza imprimiendo el tablero y, de haber algún cuatro en raya, se notificará que ha ganado.

Se repite lo mismo para el segundo jugador, y continúa hasta que alguno de los dos gane o se quede sin fichas.