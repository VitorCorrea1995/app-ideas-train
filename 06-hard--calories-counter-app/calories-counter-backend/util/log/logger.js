const winston = require('winston');

const transports = winston.transports;
const format = winston.format;

const printMsg = info => `${info.level}: ${[info.timestamp]}: ${info.message}`;
const dateTimeFormat = 'MM-DD-YYYY HH:mm:ss';

const logger = winston.createLogger({
    transports: [
      new transports.Console({
        level: 'info',
        handleExceptions: false,
        colorize: true
      }),
      new transports.File({
        name: 'file.error',
        filename: './logs/error.log',
        level: 'error',
        format:format.combine(
            format.timestamp({format: dateTimeFormat}),
            format.align(),
            format.printf(printMsg),
      )}),
      new transports.File({
        name: 'file.info',
        filename: './logs/info.log',
        level: 'info',
        format:format.combine(
            format.timestamp({format: dateTimeFormat}),
            format.align(),
            format.printf(printMsg),
      )}),
      new transports.Console({
        level: 'debug',
        handleExceptions: false,
        colorize: true
      })
    ],
    exceptionHandlers: [
      new transports.File({
          filename: './logs/exceptions.log',
      }),
      new transports.Console({
        level: 'debug',
        handleExceptions: false,
        colorize: true
      })
    ],
    format: format.combine(
      format.timestamp({
          format: dateTimeFormat
      }),
      format.align(),
      format.printf(printMsg)
    ),
    exitOnError: false
});

module.exports = logger;