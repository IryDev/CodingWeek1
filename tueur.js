class Character {
    constructor(name, characteristic) {
        this.name = name;
        this.characteristic = characteristic;
        this.isDead = false;
    }
}

class Survivor extends Character {
    constructor(name, characteristic, probDeath, probInflictDamage) {
        super(name, characteristic);
        this.probDeath = probDeath;
        this.probInflictDamage = probInflictDamage;
        this.probInflictDamageAndDie = probDeath + probInflictDamage;
    }
}

class Killer extends Character {
    constructor(name, characteristic) {
        super(name, characteristic);
        this.lifePoints = 100;
    }

    attack(target) {
        const random = Math.random();

        if (random < target.probDeath) {
            target.isDead = true;
            return `${target.name} est mort.`;
        } else if (random < target.probInflictDamage) {
            this.getDamage(10);
            return `${target.name} a esquivé et a infligé 10 points de dégâts à ${this.name}.`;
        } else if (random < target.probInflictDamageAndDie){
            this.getDamage(15);
            target.isDead = true;
            return `${target.name}, a infligé 15 points de dégats au tueur, mais est mort`;
        }
    }

    getDamage(damages) {
        this.lifePoints -= damages;
        this.isDead = this.lifePoints <= 0;
    }
}

function createSurvivors(namesSurvivors, characsSurvivors) {
    const survivors = [];

    for (let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * characsSurvivors.length);
        const nameSurvivor = namesSurvivors[randomNumber];
        const characSurvivor = characsSurvivors[randomNumber];
        survivors.push(
            new Survivor(nameSurvivor, characSurvivor, 0.2, 0.4)
        );
        namesSurvivors.splice(randomNumber, 1);
        characsSurvivors.splice(randomNumber, 1);
    }

    return survivors;
}

const jason = new Killer("Jason", "tueur en série");

const namesSurvivor = ["Sannah", "John", "Robert", "Lily", "William", "Alex", "Zack", "Bryan"];
const characSurvivor = ["Nerd", "Sportif", "Blonde", "Artiste", "Scientifique", "Chasseur", "Le noir"];

const survivors = createSurvivors(namesSurvivor, characSurvivor);


// mise en place du jeu
while (!jason.isDead && survivors.some((survivor) => !survivor.isDead)) {
    const aliveSurvivors = [];
    survivors.forEach((survivant) => {
        if (!survivant.isDead){
            aliveSurvivors.push(survivant)
        }
    } )
    let randomNumber = Math.floor(Math.random() * aliveSurvivors.length);
    const targetSurvivor = aliveSurvivors[randomNumber]
    const message = jason.attack(targetSurvivor);
    console.log(message);
}


// dénouement
if (jason.isDead) {
    console.log("Les survivants ont tué Jason.");
    const deadPeople = survivors.filter((survivant) => survivant.isDead);
    for (const deadPerson of deadPeople) {
        console.log(`RIP à ${deadPerson.name}.`);
    }
} else {
    console.log("Jason a tué tout les survivants.");
}
