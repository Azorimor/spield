import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from './util/logger';
import logger from 'pino-http';
import router from './router/router';
import { PROD } from './util/config';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
if (PROD) {
  app.use(logger({ logger: pino }));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;
