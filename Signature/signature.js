/* import { generateKeyPairSync, sign, verify } from 'crypto';

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
  },
});

const documentation = `batatinha123`;

const documentationSign = sign('sha256', documentation, privateKey)
console.log(documentationSign.toString('hex'));

const isVerify = verify('sha256', documentation, publicKey, documentationSign);

console.log(
  isVerify
); */

import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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
  },
});

let documentation = 'message extremely simple';
const signature = createSign('sha256');
signature.update(documentation);
const messageSignature = signature.sign(privateKey, 'hex');

const verifySignature = createVerify('sha256');
verifySignature.update(documentation);
documentation = 'message extremely orange'

const isSign = verifySignature.verify(publicKey, messageSignature, 'hex');

console.log(
  isSign
);
