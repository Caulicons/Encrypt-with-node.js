import { pbkdf2Sync, randomBytes } from 'crypto';

const createHahsWithSalt = (password) => {
  const salt = randomBytes(64).toString('hex');
  const interact = 10000;
  const hash = pbkdf2Sync(password, salt, interact, 256, 'sha256').toString('hex');

  return `${salt}:${interact}:${hash}`
}

const verificationPassword = (passwordAttempt, savedSalt, savedInteract) => {

  return pbkdf2Sync(passwordAttempt, savedSalt, Number(savedInteract), 256, 'sha256').toString('hex');
}

class User {
  constructor(name, password) {
    this.name = name;
    [
      this.savedSalt,
      this.savedInteract,
      this.savedHash
    ] = createHahsWithSalt(password).split(':');
  };

  authentication(passwordAttempt) {

    const verification = this.savedHash === verificationPassword(passwordAttempt, this.savedSalt, this.savedInteract);

    if (verification)
      return console.log('Correct Authentication!');

    return console.log('Invalid password !!!!!!');
  }

  showPassword() {
    console.log(
      this.salt,
      this.interact,
      this.hash
    );
  }
}

const username = 'Vítor O.';
const userPassword = 'batatinha123'

const newUser = new User(username, userPassword);

newUser.authentication('batatinha122342')