import morgan from 'morgan';
import winston from 'winston';

const winstonLogger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      colorize: true,
      timestamp: true,
      prettyPrint: true,
      label: 'yostock-server'
    })
  ]
});

winstonLogger.stream = {
  write: message => winstonLogger.info(message)
};

const logger = morgan('combined', {stream: winstonLogger.stream});
export default logger;