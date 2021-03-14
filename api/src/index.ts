import 'reflect-metadata';
import app from './app';
import logger from './util/logger';
import {
  PORT,
  TYPEORM_DATABASE,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING
} from './util/config';
import { createConnection } from 'typeorm';
import { Answer } from './entity/Answer';
import { User } from './entity/User';
import { Info } from './entity/Info';
import { Spiel } from './entity/Spiel';
import { Question } from './entity/Question';
import { Slide } from './entity/Slide';

createConnection({
  type: 'postgres',
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: TYPEORM_SYNCHRONIZE,
  logging: TYPEORM_LOGGING,
  entities: [Answer, User, Info, Question, Slide, Spiel]
})
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
