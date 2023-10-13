class Pokemon {
  constructor(name, hp, attack, defense, luck) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.luck = luck;
    this.isDead = false;
  }

  isLucky() {
    const luckChance = Math.random();

    if (luckChance < this.luck) {
      return true;
    } else {
      return false;
    }
  }

  attackPokemon(target) {
    const luckChance = Math.random();

    if (luckChance < this.luck) {
      target.getDamage(this.attack - target.defense);
      console.log(
        `${this.name} a attaqué ${target.name} et lui a infligé ${this.attack} points de dégats. ${target.name} a ${target.hp} points de vie.`
      );
    } else {
      console.log(
        `${this.name} a attaqué ${target.name} mais a raté son attaque.`
      );
    }
  }

  getDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.isDead = true;
      this.hp = 0;
    }
  }
}

charizard = new Pokemon("Charizard", 130, 50, 10, 0.4);
blastoise = new Pokemon("Blastoise", 130, 40, 20, 0.3);

while (!charizard.isDead && !blastoise.isDead) {
  if (!charizard.isDead) {
    charizard.attackPokemon(blastoise);
  }

  if (!blastoise.isDead) {
    blastoise.attackPokemon(charizard);
  }
}

if (charizard.isDead) {
  console.log(`${charizard.name} est mort.`);
} else if (blastoise.isDead) {
  console.log(`${blastoise.name} est mort.`);
}
