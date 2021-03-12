import 'reflect-metadata';
import app from './app';
import logger from './util/logger';
import { PORT } from './util/config';

app.listen(PORT, () => {
  logger.info(`App is listening on port ${PORT}`);
});
