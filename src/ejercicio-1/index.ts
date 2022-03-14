import {Pokemon} from './Pokemon';
import {Combat} from './combat';


const Pokedex:Pokemon[] = [];

const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'electrico', 55, 40, 90, 80);
const Squirtle = new Pokemon('Squirtle', 0.5, 9, 'agua', 48, 65, 43, 85);
Pokedex.push(Pikachu);
Pokedex.push(Squirtle);

const combate = new Combat(Pikachu, Squirtle);
combate.start();
// console.table(Pokedex);