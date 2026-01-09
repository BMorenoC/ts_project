import { Hero } from './models/Hero.js';
import { RACE, CLASS } from './types/Enums.js';

const legolas = new Hero('Legolas', RACE.ELF, CLASS.Mage);
legolas.atacar();
legolas.recibirDaño(30);
legolas.curar();
