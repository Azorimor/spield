import 'reflect-metadata';
import app from './app';
import logger from './util/logger';
import { PORT } from './util/config';
import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error(error);
  });
