import pino from 'pino';
import { PROD } from './config';

const logger = pino({
  name: 'SpielD-API',
  prettyPrint: !PROD
});

export default logger;
