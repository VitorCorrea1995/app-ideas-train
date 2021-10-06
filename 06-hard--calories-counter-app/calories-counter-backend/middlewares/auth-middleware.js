const HttpStatus = require('http-status');

const validateTokenMiddleware = (error, req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(HttpStatus.FORBIDDEN).send({message: 'Invalid credentials'});
  }
}


module.exports = validateTokenMiddleware;