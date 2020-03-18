function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin}.`
    },
    evaluateFight(char) {
      return `Your opponent takes ${this.attack > char.defense ? this.attack - char.defense : 0} damage and you receive ${char.attack > this.defense ? char.attack - this.defense : 0} damage`;
    }
  }
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);

console.log(frodo.describe());
console.log(gandalf.evaluateFight(legolas));
