import { Entity } from './Entity.js';

export class Monster extends Entity {
  damage: number;

  constructor(name: string, maxHp: number, damage: number) {
    super(name, maxHp); // Llamada al constructor del Padre
    this.damage = damage; // Configuración propia del Hijo
  }

  attack(target: Entity): void {
    // Daño aleatorio entre 0 y el daño máximo
    const randomDamage = Math.floor(Math.random() * (this.damage + 1));

    console.log(`The ${this.name} attacks wildly! 🎲`);

    // Llamamos al método en el objetivo
    target.takeDamage(randomDamage);
  }
}
