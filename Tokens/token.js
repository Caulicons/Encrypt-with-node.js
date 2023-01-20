import jwt from 'jsonwebtoken';
const documentation = "datas extreme important to send by JWT";

const jwts = jwt.sign(documentation, 'shhhhh');

const jwtst = jwt.verify(jwts, 'shhhhh');
console.log(jwtst);