const phrase = 'alura';

const encryptPhrase = (phrase, movement) => {

  const encryptPhrase = phrase.split('').map(letter => {

    const charCodeOfLetter = letter.charCodeAt(0);
    const encryptPhraseLetter = String.fromCharCode(charCodeOfLetter + movement);
    return encryptPhraseLetter
  })

  return encryptPhrase.join('')
}

const unencryptedPhaser = (encryptPhrase, password) => {
  const unencryptedPhaser = encryptPhrase.split('').map(letter => {

    const charCodeOfLetter = letter.charCodeAt(0);
    const unencryptedLetter = String.fromCharCode(charCodeOfLetter - password);
    return unencryptedLetter
  })
  return unencryptedPhaser.join('');

};
const test = encryptPhrase(phrase, 4);
console.log(test);
const test2 = unencryptedPhaser(test, 4);
console.log(test2);

console.log(String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41));