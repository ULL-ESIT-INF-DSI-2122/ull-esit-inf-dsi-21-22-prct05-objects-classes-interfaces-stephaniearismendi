import {Pokemon} from './Pokemon';
import {Combat} from './combat';


const Pokedex:Pokemon[] = [];

const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'electrico', 55, 40, 90, 80);
const Squirtle = new Pokemon('Squirtle', 0.5, 9, 'agua', 48, 65, 43, 85);
const Charmeleon = new Pokemon('Charmeleon', 1.1, 19, 'fuego', 64, 58, 80, 58);
const Exeggutor = new Pokemon('Exeggutor', 2, 120, 'planta', 95, 85, 55, 95);
const Growlithe = new Pokemon('Growlithe', 0.7, 19, 'fuego', 70, 50, 60, 55);
const Seaking = new Pokemon('Seaking', 1.3, 39, 'agua', 92, 65, 68, 80);
const Bayleef = new Pokemon('Bayleef', 12, 15.8, 'planta', 62, 80, 60, 60);


Pokedex.push(Pikachu);
Pokedex.push(Squirtle);
Pokedex.push(Charmeleon);
Pokedex.push(Exeggutor);
Pokedex.push(Growlithe);
Pokedex.push(Seaking);
Pokedex.push(Bayleef);

console.log('El combate está a punto de comenzar.');
const aleatorio = Math.floor(Math.random() * Pokedex.length);
const pokemon1:Pokemon = Pokedex[aleatorio];
Pokedex.splice(aleatorio, 1);
console.log('Tu equipo Pokémon está rebozante de energía.');
console.table(Pokedex);
const combate = new Combat(Pikachu, pokemon1);
combate.start();
