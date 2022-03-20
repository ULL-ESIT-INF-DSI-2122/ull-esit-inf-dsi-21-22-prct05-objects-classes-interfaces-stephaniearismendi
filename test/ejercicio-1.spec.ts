import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Combat} from '../src/ejercicio-1/combat';

const Pokedex:Pokemon[] = [];

const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'electrico', 55, 40, 90, 80);
const Squirtle = new Pokemon('Squirtle', 0.5, 9, 'agua', 48, 65, 43, 85);
const combate = new Combat(Pikachu, Squirtle);

Pokedex.push(Pikachu);
Pokedex.push(Squirtle);


describe('Pokémon tests: ', () => {
  it('Ataque aleatorio debe devolver una cadena', () =>{
    expect(combate.ataque_aleatorio(Pikachu)).to.be.not.undefined;
  });
  it('Pikachu (electrico) vs Squirtle (agua) -> ¡Es muy eficaz!', () =>{
    expect(combate.eficacia(Pikachu, Squirtle)).to.be.equal('¡Es muy eficaz!');
  });
  it('damage attack 50, defense 90, efectiveness 1 must be 0.5', () =>{
    expect(combate.damage(50, 90, 1)).to.be.equal(27.77777777777778);
  });
  it('electrico vs agua 50 50 must be 100', () =>{
    expect(combate.pokemonBattle('electrico', 'agua', 50, 50)).to.be.equal(100);
  });
  Pikachu.set_hp(0);
  it('Comprobar si algún pokémon está debilitado -> true', () =>{
    expect(combate.comprobar_debilitado()).to.be.true;
  });
});