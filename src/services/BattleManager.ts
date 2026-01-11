// src/services/BattleManager.ts
import { Hero } from '../models/Hero.js';
import { Monster } from '../models/Monster.js';

export class BattleManager {
  // Al ser "static", podemos llamarlo directamente como BattleManager.startTurn(...)
  static startTurn(attacker: Hero, defender: Monster): void {
    console.log(`\n--- ⚔️ NEW TURN ⚔️ ---`);

    // 1. Turno del Héroe
    attacker.attack(defender);

    // 2. Comprobar si el monstruo sigue vivo
    if (defender.currentHp > 0) {
      console.log(`\nThe ${defender.name} is furious and strikes back!`);
      defender.attack(attacker);
    } else {
      console.log(`\n🏆 VICTORY! The ${defender.name} has been slain.`);
    }
  }
}
