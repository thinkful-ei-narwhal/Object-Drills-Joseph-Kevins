const person1 = {
  name: 'John',
  jobTitle: 'Software Developer',
};
const person2 = {
  name: 'Mary',
  jobTitle: 'Web Developer',
};
const person3 = {
  name: 'Harold',
  jobTitle: 'Front-End Developer',
};
const person4 = {
  name: 'Susy',
  jobTitle: 'Back-End Developer',
};

const peopleArray = [person1, person2, person3, person4];

peopleArray.forEach(obj => console.log(`${obj.name}: ${obj.jobTitle}`));

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
  other(char) {
    if (char !== 'a' || char !== 'b' || char !== 'c' || char !== 'd') {
      return (" ");
    }
  }
}

function decode(arrayOfWords) {

}

console.log(Boolean(" "));