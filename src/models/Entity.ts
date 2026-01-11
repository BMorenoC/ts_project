export abstract class Entity {
  name: string;
  currentHp: number;
  maxHp: number;

  constructor(name: string, maxHp: number) {
    this.name = name;
    this.maxHp = maxHp;
    this.currentHp = maxHp;
  }

  // Este método lo heredará cualquiera (Héroe o Monstruo)
  takeDamage(amount: number): void {
    this.currentHp -= amount;

    if (this.currentHp <= 0) {
      this.currentHp = 0;
      console.log(`${this.name} has been defeated! 💀`);
    } else {
      console.log(
        `${this.name} took ${amount} damage. HP: ${this.currentHp}/${this.maxHp}` //preguntar por que divide entre /
      );
    }
  }

  heal(): void {
    this.currentHp = this.maxHp;
    console.log(`${this.name} se ha curado completamente! ✨`);
  }
}
