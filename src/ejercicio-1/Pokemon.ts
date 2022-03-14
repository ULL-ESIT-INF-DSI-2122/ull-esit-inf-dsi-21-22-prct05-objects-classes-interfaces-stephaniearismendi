/**
 * Ejercicio 1 - Pokedex
 */

export class Pokemon {
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
  /**
   * getters and setters
   */
  public get_name() {
    return this.name;
  }
  public get_attack() {
    return this.attack;
  }
  public get_defense() {
    return this.defense;
  }
  public get_velocity() {
    return this.velocity;
  }
  public get_type() {
    return this.type;
  }
  public get_hp() {
    return this.HP;
  }
  public set_hp(vida:number) {
    this.HP = vida;
  }
  public get_height() {
    return this.height;
  }
  public get_weight() {
    return this.weight;
  }
}
