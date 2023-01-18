import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const key = randomBytes(32);
const iv = randomBytes(16);

const encrypted = (input) => {
  const cipher = createCipheriv(
    'aes-256-cbc', key, iv
  ),
    encrypted = cipher.update(input),
    inputEncrypted = Buffer.concat([encrypted, cipher.final()])

  return inputEncrypted.toString('hex');
};

const decipherMessage = (inputEncrypted, key, iv) => {

  const decipher = createDecipheriv(
    'aes256', key, iv
  ),
    decrypted = decipher.update(inputEncrypted, "hex"),
    message = Buffer.concat([decrypted, decipher.final()]);

  return message.toString();
};

const message = 'hey there! batata';

const messageEncryption = encrypted(message);
console.log(messageEncryption);

console.log(decipherMessage(messageEncryption, key, iv));
