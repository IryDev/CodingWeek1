/*
Créer une classque Pokemon avec comme paramètres : name, attack, defense, defense, pp, luck une fonction isLucky et une fonction AttackPokemon

Créer deux instances de Pokémon avec des stats différentes
Tant que l'un des deux pokémons n'est pas mort :
le premier attaques le second (isLucky + AttackPokemon)
afficher la cie et les dégats endommagés du premier
afficher un message de mort pour le pokemon perdant

Attention la formule des dégâts est la suivante :
dégâts= att de l'attaque - def du défenseur

la luck correspond à la probabilité de toucher l'ennemi (précision e pourcentage)
générer un nombre aléatoire avec Math.random() qui retourne un décimal entre 0 et 1

Si ce nombre est inférieur à la luck, l'attaque touche et les dégâts sont appliquész
*/

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
