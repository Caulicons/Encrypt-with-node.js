import { createHash } from 'crypto';

const createHahsWithPassword = (password) => {

  return createHash('sha256').update(password).digest('hex');
}

class User {
  constructor(name, password) {
    this.name = name;
    this.password = createHahsWithPassword(password);
  };

  authentication(inputPassword) {

    const givenPassword = createHahsWithPassword(inputPassword);

    if (givenPassword === this.password)
      return console.log('Correct Authentication!');

    return console.log('Invalid password !!!!!!');
  }
}
const username = 'Vítor O.';
const userPassword = 'batatinha123'

const newUser = new User(username, userPassword);

newUser.authentication('batatinha');