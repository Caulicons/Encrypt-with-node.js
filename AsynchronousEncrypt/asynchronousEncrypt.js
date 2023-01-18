import { generateKeyPairSync, privateDecrypt, publicEncrypt, constants } from 'crypto';

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret',
  },
});

const encrypted = (input, publicKey) => {

  return publicEncrypt(publicKey, input)
};

const decrypted = (input, privateKey) => {

  const data = privateDecrypt({
    key: privateKey,
    passphrase: 'top secret'
  }, input);

  return data.toString('utf-8');
};

const message = "Hello, world!";
const messageEncrypted = encrypted(message, publicKey);

console.log(
  decrypted(messageEncrypted, privateKey)
);