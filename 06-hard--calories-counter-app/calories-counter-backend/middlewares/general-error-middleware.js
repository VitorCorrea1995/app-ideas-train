const HttpStatus = require('http-status')

const generalErrorMiddleware = (error, req, res, next) => {
  res
    .status(error.status || error.code || HttpStatus.INTERNAL_SERVER_ERROR)
    .json({message: error.message || error.description || 'Something wrong occured'})
}

module.exports = generalErrorMiddleware;