import { RACE, CLASS } from '../types/Enums.js';
import type { Stats } from './Stats.js';

export interface Character {
  id: string | number;
  name: string;
  race: RACE;
  class: CLASS;
  level: number;
  stats: Stats;
  currentHp: number;
  maxHp: number;
  experience: number;
}
