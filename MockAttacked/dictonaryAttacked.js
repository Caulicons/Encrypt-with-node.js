import { createHash } from 'crypto';

class User {
  constructor(name, password) {
    this.name = name;
    this.password = this.createHahsWithPassword(password);
  };

  createHahsWithPassword = (password) => {
    
    return createHash('sha256').update(Buffer.from(password.toString())).digest('hex');
  }

  authentication(inputPassword) {

    const givenPassword = this.createHahsWithPassword(inputPassword);

    if (givenPassword === this.password) {
      console.log('Correct Authentication!');
      return true
    }

    //return console.log('Invalid password !!!!!!');
  }
}

const fistUser = new User('Vítor O.', 'brasil');

const passwordCommons = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"];

const dictionaryAttackTest = (user) => {

  passwordCommons.map(password => {

    if(user.authentication(password)) {
      return console.log('the password is ' + password);
    }
  })
}

dictionaryAttackTest(fistUser)

