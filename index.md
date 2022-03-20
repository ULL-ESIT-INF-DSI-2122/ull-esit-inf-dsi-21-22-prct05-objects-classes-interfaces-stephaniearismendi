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
