import 'reflect-metadata';
import app from './app';
import logger from './util/logger';
import { PORT } from './util/config';
import connection from './util/connection';

connection
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error({
      message: 'Could not connect to database.',
      errorMessage: error.message,
      error
    });
  });
