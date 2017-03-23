import logger from './logger';
import cookieParser from "cookie-parser";
import auth from './auth';

/**
 * Initializes Express middleware
 * @param app - Express app instance
 */
export default function init(app) {

  // Logging
  app.use(logger);

  // Cookie parser
  app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

  // Setup authorization
  app.use(auth);
}