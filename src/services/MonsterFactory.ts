import { Monster } from '../models/Monster.js';

// Definimos una pequeña interfaz interna para los "moldes" de los monstruos
interface MonsterTemplate {
  name: string;
  hp: number;
  damage: number;
}

export class MonsterFactory {
  // Aquí está tu lista de 10 enemigos, desde débiles hasta jefes
  private static monsters: MonsterTemplate[] = [
    { name: 'Slime Viscoso', hp: 20, damage: 2 }, // Nivel 1
    { name: 'Rata Gigante', hp: 30, damage: 4 }, // Nivel 1
    { name: 'Goblin Saqueador', hp: 45, damage: 6 }, // Nivel 2
    { name: 'Esqueleto Guerrero', hp: 60, damage: 8 }, // Nivel 3
    { name: 'Lobo Huargo', hp: 70, damage: 10 }, // Nivel 3
    { name: 'Orco Berserker', hp: 100, damage: 15 }, // Nivel 4
    { name: 'Fantasma Errante', hp: 80, damage: 12 }, // Nivel 4
    { name: 'Troll de Caverna', hp: 150, damage: 20 }, // Nivel 5 (Mini Jefe)
    { name: 'Gólem de Piedra', hp: 200, damage: 10 }, // Nivel 5 (Tanque)
    { name: 'Dragón Joven', hp: 300, damage: 35 }, // Nivel 6 (JEFE)
  ];

  // Este método elige uno al azar y devuelve una NUEVA instancia
  static createRandomMonster(): Monster {
    // 1. Elegir un índice aleatorio del array (de 0 a 9)
    const randomIndex = Math.floor(Math.random() * this.monsters.length);

    // 2. Obtener el molde
    const template: MonsterTemplate = this.monsters[randomIndex]!;

    // 3. Crear y devolver el monstruo real
    console.log(`\n🎲 Rolling the dice... summoning a monster...`);
    return new Monster(template.name, template.hp, template.damage);
  }
}
