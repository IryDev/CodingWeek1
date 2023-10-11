/* 
John essaie de rentrer chez lui en taxi
Problème : il a horreur d'écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu'il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu'une musique se change à chaque feu rouge qu'il rencontre et qu'il est à 30 feu rouge de chez lui.
A chaque feu rouge, afficher la musique jouée + le nombre de feu restants.

Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il arrive chez lui et affiche "John est arrivé chez lui et afficher le nombre de taxi changés"
- Si il a perdu toute sa santé mentale, il s'arrête et affiche "John a pété un cable et a tué le chauffeur de taxi"

Nous avons besoin d'un personnage avec un prénom et une santé mentale (10 au départ)
Nous avons besoin d'une liste de 5 musiques (Anissa, Blinding Lights, Dance Monkey, Roses, Don't Start Now)
Nous avons besoin d'un nombre de feux rouges (30) et un nombre de changements de taxi
*/

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
    for (let i = 1; i <= this.redLights; i++) {
      const song = this.radio[Math.floor(Math.random() * this.radio.length)];

      if (song == "Anissa - Wejdene") {
        target.mentalHealth--;
        console.log(
          `${target.name} a changé de taxi car il ne supporte pas la musique ${song}. Il lui reste ${
            this.redLights - i
          } feux rouges.`
        );
        this.taxiChanges += 1;
      } else {
        console.log(
          `${target.name} a écouté la musique ${song}. Il lui reste ${
            this.redLights - i
          } feux rouges.`
        );
      }

      if (target.mentalHealth == 0) {
        console.log(
          `${target.name} : explosion`
        );
        break;
      }

      if (i === this.redLights) {
        console.log(
          `${target.name} est arrivé chez lui et a changé de taxi ${this.taxiChanges} fois.`
        );
      }
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
