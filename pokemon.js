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
        return Math.random() < this.luck;
    }

    attackPokemon(target) {
        if (target.isLucky() < this.luck) {
            target.getDamage(this.attack - target.defense);
            console.log(
                `${this.name} a attaqué ${target.name} et lui a infligé ${this.attack} points de dégats. ${target.name} a ${target.hp} points de vie.`
            );
        } else {
            console.log(
                `${this.name} a attaqué ${target.name} mais a raté son attaque !`
            );
        }

    }

    getDamage(damage) {
        this.hp -= damage;
        this.isDead = this.hp <= 0;
    }
}

charizard = new Pokemon("Charizard", 130, 40, 15, 0.4);
blastoise = new Pokemon("Blastoise", 130, 35, 20, 0.3);

while (!charizard.isDead && !blastoise.isDead) {
    if (!charizard.isDead) {
        charizard.attackPokemon(blastoise);
    }

    if (!blastoise.isDead) {
        blastoise.attackPokemon(charizard);
    }
}

console.log(charizard.isDead ? `${charizard.name} est KO.` : `${blastoise.name} est KO.`);