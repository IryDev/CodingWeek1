class Character {
  constructor(name, mentalHealth) {
    this.name = name;
    this.mentalHealth = mentalHealth;
  }
}

class Route {
  constructor(redLights, radio) {
    this.redLights = redLights;
    this.taxiChanges = 0;
    this.radio = radio;
  }

  simulateRoute(target) {
    while (this.redLights > 0 && target.mentalHealth > 0) {
      const song = this.radio[Math.floor(Math.random() * this.radio.length)];

      this.redLights--;

      if (song === "Anissa - Wejdene") {
        target.mentalHealth--;

        console.log(
          `${target.name} a changé de taxi car il ne supporte pas la musique ${song}. Il lui reste ${this.redLights} feux rouges.`
        );
        this.taxiChanges += 1;
      } else {
        console.log(
          `${target.name} a écouté la musique ${song}. Il lui reste ${this.redLights} feux rouges.`
        );
      }
    }

    if (target.mentalHealth === 0) {
      console.log(`${target.name} : Explosion`);
    } else if (this.redLights === 0) {
      console.log(
        `${target.name} est arrivé chez lui et a changé de taxi ${this.taxiChanges} fois.`
      );
    }
  }
}

const songs = [
  "Anissa - Wejdene",
  "Mad - Ne Yo",
  "It's You - Henry Lau",
  "Hello - Adele",
  "Rehab - Rihanna",
];

const redLights = 30;

const john = new Character("John", 10);
const route = new Route(redLights, songs);

route.simulateRoute(john);
