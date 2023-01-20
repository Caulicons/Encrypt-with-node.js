import {createHash} from 'crypto';

const passwordCommons = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"];

const leaksHash = ["21232f297a57a5a743894a0e4a801fc3",
  "cedf5ab7b5c5852b3ed35d7dbe3c3835",
  "81dc9bdb52d04dc20036dbd8313ed055"]

  leaksHash.map(leakHash => {

    passwordCommons.map(passwordCommon => {

      const passwordCommonHash = createHash('MD5').update(passwordCommon).digest('hex');

      if(passwordCommonHash === leakHash) {
        return console.log(`The hash ${leakHash} your password is ${passwordCommon}`)
      }
    })
} )


/* 
const countCharacters = (string) => string.length; 

console.log(
  countCharacters('21232f297a57a5a743894a0e4a801fc3'),
  countCharacters('4badaee57fed5610012a296273158f5f')
); */