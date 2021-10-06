const HttpStatus = require('http-status');
const logger = require('../util/log/logger');

const notFoundMiddleware = (error, req, res, next) => {
  logger.warn(`Middleware - Not Found - URL ${req.originalUrl}`)
  res.status(HttpStatus.NOT_FOUND).json({message: 'This route do not exist'});
}

module.exports = notFoundMiddleware;