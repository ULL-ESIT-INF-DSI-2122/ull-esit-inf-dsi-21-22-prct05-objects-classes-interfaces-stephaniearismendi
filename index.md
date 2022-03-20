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