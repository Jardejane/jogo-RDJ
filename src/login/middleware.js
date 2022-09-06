require('dotenv').config();
const jwt = require('jsonwebtoken');
const registration = require('./login.service');

module.exports = (req, res, next) => {
  const loginHeader = req.headers.authorization;
  if (!loginHeader) {
    return res.status(401).send({ message: 'The token not informed ' });
  }

  const validat = loginHeader.split(' ');

  if (validat.length !== 2) {
    return res.status(401).send({ message: 'Token invalido!' });
  }

  const [scheme, token] = validat;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token badly formatted!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await registration.login.findUseById(decoded._id);
    if (err || !user || !user.id) {
      return res.status(401).send({ message: 'Token invalid!' });
    }
    req.userId = user.id;
    return next();
  });
};
