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

    return console.log('Invalid password !!!!!!');
  }
}

const fistUser = new User('Vítor O.', 11);

const bruteAttackedTest = (user) => {

  for (let i = 0; i < 10000; i++) {
    console.log
    if(user.authentication(i)) {
      console.log(`The User password is ${i}`)
      i = 10000000;
    }
  }
}

bruteAttackedTest(fistUser);