import {Pokemon} from './Pokemon';
export class Combat {
  ataques_planta:string[] = ['látigo cepa',
    'hierba Lazo', 'voto planta', 'mazazo'];
  ataques_fuego:string[] = ['lanzallamas', 'ascuas',
    'pirotecnia', 'patada ígnea'];
  ataques_agua:string[] = ['acua jet', 'concha filo',
    'agua lodosa', 'surf'];
  ataques_electrico:string[] = ['chispa', 'chispazo',
    'electrocañon', 'rayo'];
  Combate:Pokemon[] = [];
  constructor(private pokemon1:Pokemon, private pokemon2:Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  /**
   * Función que comienza el combate pokémon y en la que se desarrolla el mismo
   */
  public start() {
    console.log('¡El entrenador Berto te desafía!');
    console.log('Entrenador Berto ha sacado a ' + this.pokemon2.get_name());
    console.log('¡Adelante ' + this.pokemon1.get_name() + '!');
    while (this.pokemon1.get_hp() > 0 && this.pokemon2.get_hp() > 0) {
      console.log(this.pokemon1.get_name() + ' ha usado ' +
        this.ataque_aleatorio(this.pokemon1) + '. ' +
        this.eficacia(this.pokemon1, this.pokemon2));
      this.pokemon2.set_hp(this.pokemon2.get_hp() -
      this.pokemonBattle(this.pokemon1.get_type(), this.pokemon2.get_type(),
          this.pokemon1.get_attack(), this.pokemon2.get_defense()));
      if (this.pokemon2.get_hp() > 0) {
        console.log(this.pokemon2.get_name() + ' ha usado ' +
        this.ataque_aleatorio(this.pokemon2) + '. ' +
        this.eficacia(this.pokemon2, this.pokemon1));
        this.pokemon1.set_hp(this.pokemon1.get_hp() -
        this.pokemonBattle(this.pokemon2.get_type(), this.pokemon1.get_type(),
            this.pokemon2.get_attack(), this.pokemon1.get_defense()));
      }
      if (!this.comprobar_debilitado()) {
        this.comprobar_ps();
      }
    }
  }
  /**
   * Función que devuelve un ataque aleatorio dependiendo del tipo del pokémon.
   * Recibe un objeto pokémon.
   */
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
  /**
   * función auxiliar para el texto del combate. según la tabla de tipos muestra un texto u otro.
   * @param pokemon1
   * @param pokemon2
   * @returns
   */
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
  /**
   * función que nos ayuda a calcular, con la formula, el daño realizado por el
   * ataque de nuestro pokémon (o el del rival)
   * @param attack
   * @param defense
   * @param effectiveness
   * @returns
   */
  public damage(attack:number, defense:number, effectiveness:number):number {
    let totalDamage:number = 0;
    totalDamage = 50 * (attack / defense) * effectiveness;
    return totalDamage;
  }

  /**
 * Función con diferentes switchs que, según el tipo de nuestro pokémon y el del rival,
 * va calculando el daño recibido u ocasionado.
 * @param myType
 * @param theirType
 * @param myAttack
 * @param theirDefense
 * @returns
 */
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
  /**
   * Función que comprueba si un pokémon se ha debilitado (sus ps son cero o menos)
   * @returns true or false (boolean)
   */
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
  /**
   * función auxiliar que nos ayuda a llevar el control del número de ps que les quedan
   * a nuestros pokémon en el combate
   */
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
}