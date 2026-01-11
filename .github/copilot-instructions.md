# AI Coding Guidelines for ts_project

## Project Overview
This is a TypeScript-based RPG game framework featuring a class hierarchy for game entities. The core architecture centers on an `Entity` base class extended by `Hero`, with interfaces like `Character` defining contracts.

## Architecture Patterns
- **Inheritance Hierarchy**: `Entity` (abstract) → `Hero` (concrete). Use `super()` in constructors to initialize parent properties.
- **Interface Implementation**: Classes implement interfaces (e.g., `Hero implements Character`) for type safety.
- **Stats System**: Stats are objects with `strength`, `dexterity`, `intelligence`, `vitality`. Base stats vary by class (see `Hero.getBaseStats()`).
- **Damage Calculation**: Computed via getter (`get damage()`) based on class-specific stat (Warrior: strength, Mage: intelligence, Archer: dexterity).

## Code Conventions
- **Imports**: Use `.js` extensions in import paths for ES module compatibility (e.g., `import { Hero } from './models/Hero.js'`).
- **Enums**: Defined in `src/types/Enums.ts` with uppercase values (e.g., `CLASS.WARRIOR`).
- **Method Naming**: Mix of English (e.g., `atacar()`) and Spanish (e.g., `recibirDaño()`, `curar()`) - maintain consistency.
- **Private Methods**: Use for internal logic like `getBaseStats()` in constructors.
- **HP Management**: `currentHp` and `maxHp` properties; damage reduces HP, healing restores to max.

## Development Workflow
- **Build**: Run `tsc` to compile TypeScript to `dist/` directory.
- **Run**: Execute compiled code with `node dist/Index.js` (main entry point).
- **No Tests**: Placeholder test script exists; implement tests in a new framework if needed.
- **Modules**: ES modules enabled (`"type": "module"` in package.json).

## Key Files
- `src/models/Entity.ts`: Base entity with HP and damage/healing logic.
- `src/models/Hero.ts`: Hero class with stats, leveling, and class-based abilities.
- `src/types/Enums.ts`: Game enums (CLASS, RACE, RARITY, ELEMENT).
- `src/Index.ts`: Main demo script creating and interacting with Hero instances.

## Examples
- Creating a hero: `new Hero('Legolas', RACE.ELF, CLASS.Archer)`
- Attacking: `hero.atacar()` (logs damage based on class stat)
- Taking damage: `hero.recibirDaño(30)` (updates HP, logs defeat if <=0)