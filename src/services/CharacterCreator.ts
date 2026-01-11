// Importamos las herramientas de preguntas
import { input, select } from '@inquirer/prompts';

// Importamos lo necesario para construir
import { Hero } from '../models/Hero.js';
import { RACE, CLASS } from '../types/EnumsCharacter.js';

export class CharacterCreator {
  // Método estático y asíncrono (porque tiene que esperar a que el usuario escriba)
  static async createHero(): Promise<Hero> {
    console.log('--- 🔨 CHARACTER CREATION 🔨 ---\n');

    // 1. Preguntar Nombre
    const name = await input({
      message: "Enter your hero's name:",
      default: 'Traveler',
    });

    // 2. Preguntar Raza
    const race = await select({
      message: 'Select your race:',
      choices: Object.values(RACE).map((r) => ({ value: r, name: r })),
    });

    // 3. Preguntar Clase
    const heroClass = await select({
      message: 'Select your class:',
      choices: Object.values(CLASS).map((c) => ({ value: c, name: c })),
    });

    // 4. Fabricar y devolver el Héroe
    return new Hero(name, race, heroClass);
  }
}
