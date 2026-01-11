import { select } from '@inquirer/prompts';
import { BattleManager } from './services/BattleManager.js';
import { CharacterCreator } from './services/CharacterCreator.js';
import { MonsterFactory } from './services/MonsterFactory.js'; // <--- IMPORTANTE

async function main() {
  console.log('⚔️  TYPESCRIPT RPG: CHAOS EDITION ⚔️\n');

  // 1. Crear Héroe
  const myHero = await CharacterCreator.createHero();
  console.log(
    `\n✨ Ready for adventure: ${myHero.name} [${myHero.race} ${myHero.class}]`
  );

  // 2. Generar Enemigo Aleatorio
  // ¡AQUÍ ESTÁ EL CAMBIO!
  const enemy = MonsterFactory.createRandomMonster();

  console.log(
    `\n🚨 A WILD ENEMY APPEARS! It's a ${enemy.name} (HP: ${enemy.maxHp})`
  );

  // 3. Bucle de batalla (Igual que antes)
  while (myHero.currentHp > 0 && enemy.currentHp > 0) {
    const action = await select({
      message: 'Choose action:',
      choices: [
        { value: 'attack', name: 'Attack ⚔️' },
        { value: 'heal', name: 'Heal 🧪' },
        { value: 'stats', name: 'Check Stats 📊' },
      ],
    });

    if (action === 'attack') {
      BattleManager.startTurn(myHero, enemy);
    } else if (action === 'heal') {
      myHero.heal();
      console.log('\nYou healed, but the enemy attacks!');
      if (enemy.currentHp > 0) enemy.attack(myHero);
    } else if (action === 'stats') {
      console.log(
        `\n📊 ${myHero.name}: ${myHero.currentHp}HP vs ${enemy.name}: ${enemy.currentHp}HP\n`
      );
    }
  }

  if (myHero.currentHp <= 0) {
    console.log('\n💀 GAME OVER');
  } else {
    console.log(`\n🏆 VICTORY! You defeated the ${enemy.name}!`);
  }
}

main();
