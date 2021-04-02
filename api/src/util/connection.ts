import { createConnection } from 'typeorm';
import { Answer } from '../entity/Answer';
import { Info } from '../entity/Info';
import { Question } from '../entity/Question';
import { Slide } from '../entity/Slide';
import { Spiel } from '../entity/Spiel';
import { User } from '../entity/User';
import {
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING,
  TYPEORM_CACHE
} from './config';

const connection = createConnection({
  type: 'postgres',
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: TYPEORM_SYNCHRONIZE,
  logging: TYPEORM_LOGGING,
  cache: TYPEORM_CACHE,
  entities: [Answer, User, Info, Question, Slide, Spiel]
});

export default connection;
