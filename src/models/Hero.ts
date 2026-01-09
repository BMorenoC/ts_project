import type { Character } from './Character.js';
import { RACE, CLASS } from '../types/Enums.js';
import type { Stats } from './Stats.js';

export class Hero implements Character {
  // 1. Propiedades (Deben coincidir con la Interface)
  id: string | number;
  name: string;
  race: RACE;
  class: CLASS;
  level: number;
  experience: number;
  currentHp: number;
  maxHp: number;
  stats: Stats;

  // 2. El Constructor: Se ejecuta cuando haces "new Hero()"
  constructor(name: string, race: RACE, heroClass: CLASS) {
    this.id = Math.floor(Math.random() * 1000); // ID aleatorio simple
    this.name = name;
    this.race = race;
    this.class = heroClass;

    // Valores iniciales por defecto
    this.level = 1;
    this.experience = 0;
    this.maxHp = 100;
    this.currentHp = 100;

    // Stats iniciales básicos (luego los mejoraremos)
    this.stats = this.getBaseStats(heroClass);
  }

  private getBaseStats(heroClass: CLASS): Stats {
    switch (heroClass) {
      case CLASS.Warrior:
        return {
          strength: 20,
          dexterity: 10,
          intelligence: 5,
          vitality: 15,
        };

      case CLASS.Mage:
        return {
          strength: 5,
          dexterity: 10,
          intelligence: 20,
          vitality: 15,
        };

      case CLASS.Archer:
        return {
          strength: 10,
          dexterity: 20,
          intelligence: 5,
          vitality: 15,
        };

      default:
        return { strength: 10, dexterity: 10, intelligence: 10, vitality: 10 };
    }
  }

  // 1. Un Getter para calcular cuánto daño hace este héroe en concreto
  get damage(): number {
    switch (this.class) {
      case CLASS.Warrior:
        return this.stats.strength; // El guerrero pega con fuerza

      case CLASS.Archer:
        return this.stats.dexterity; // ¿Con qué pega el arquero?

      case CLASS.Mage:
        return this.stats.intelligence; // ¿Con qué pega el mago?

      default:
        return 0;
    }
  }

  // 3. Métodos (Acciones)
  atacar(): void {
    console.log(`${this.name} ataca y causa ${this.damage} puntos de daño!`);
  }

  recibirDaño(cantidad: number): void {
    this.currentHp -= cantidad;
    if (this.currentHp <= 0) {
      this.currentHp = 0;
      console.log(`${this.name} ha sido derrotado!`);
    } else {
      console.log(
        `${this.name} recibe ${cantidad} de daño. HP actual: ${this.currentHp}`
      );
    }
  }

  curar(): void {
    this.currentHp = this.maxHp;
    console.log(
      `${this.name} se ha curado completamente! HP actual: ${this.currentHp}`
    );
  }
}
