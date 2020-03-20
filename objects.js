function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`
    },
    evaluateFight(char) {
      return `Your opponent takes ${this.attack > char.defense ? this.attack - char.defense : 0} damage and you receive ${char.attack > this.defense ? char.attack - this.defense : 0} damage`;
    },
    weapon,
  }
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'an Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow'),
]

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9, 4, 'a Hadhafang'));

const aragorn = characters.find(obj => obj.nickname == 'aragorn');
let describeAragorn = aragorn.describe();

// console.log(describeAragorn);

const hobbits = characters.filter(obj => obj.race == 'Hobbit');
// hobbits.forEach(obj => console.log(obj));

const strongChars = characters.filter(obj => (obj.attack > 5) ? true : false);
// console.log(strongChars);

console.log(characters[3].describe());