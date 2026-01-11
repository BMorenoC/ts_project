import type { Character } from './Character.js';
import type { Stats } from './Stats.js';
import { RACE, CLASS } from '../types/EnumsCharacter.js';
import { Entity } from './Entity.js'; // <--- Importamos al Padre

// AVISO: 'extends Entity' conecta la herencia
export class Hero extends Entity implements Character {
  // Ya NO ponemos name, currentHp ni maxHp aquí. ¡Ya los tiene el padre!
  id: string;
  race: RACE;
  class: CLASS;
  level: number;
  experience: number;
  stats: Stats;

  // Constructor del Hijo
  constructor(name: string, race: RACE, heroClass: CLASS) {
    // 1. LLAMADA AL PADRE (SUPER)
    // Le pasamos el nombre y la vida inicial (ej: 100)
    super(name, 100);

    // 2. Configuración propia del Hijo
    this.id = 'hero-' + Math.floor(Math.random() * 1000);
    this.race = race;
    this.class = heroClass;
    this.level = 1;
    this.experience = 0;

    // Stats base según la clase
    this.stats = this.getBaseStats(heroClass);
  }

  attack(target: Entity): void {
    console.log(
      `${this.name} attacks ${target.name} dealing ${this.damage} damage! ⚔️`
    );

    // Llamamos al método en el objetivo
    target.takeDamage(this.damage);
  }

  //Tipo de daño según clase
  get damage(): number {
    switch (this.class) {
      case CLASS.Warrior:
        return this.stats.strength;
      case CLASS.Mage:
        return this.stats.intelligence;
      case CLASS.Archer:
        return this.stats.dexterity;
      default:
        return 0;
    }
  }

  //Stats base según la clase
  private getBaseStats(heroClass: CLASS): Stats {
    switch (heroClass) {
      case CLASS.Warrior:
        return { strength: 20, dexterity: 10, intelligence: 5, vitality: 15 };
      case CLASS.Mage:
        return { strength: 5, dexterity: 10, intelligence: 20, vitality: 15 };
      case CLASS.Archer:
        return { strength: 10, dexterity: 20, intelligence: 5, vitality: 15 };
      default:
        return { strength: 10, dexterity: 10, intelligence: 10, vitality: 10 };
    }
  }
}
