'use strict';
const cipher = {
  a : 2,
  b : 3,
  c : 4,
  d : 5,
};

function decode(arrOfWords) {
  let decodedWord = '';
  for (let i = 0; i < arrOfWords.length; i++) {
    let cipherKey = arrOfWords[i][0];
    let uncoded = cipher[cipherKey];
    if (uncoded) {
      decodedWord += arrOfWords[i][uncoded - 1];
    } else {
      decodedWord += ' ';
    }
  }
  return decodedWord;
}

function decodeWords(codedString) {
  let splitString = codedString.split(' ');
  return decode(splitString);
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));