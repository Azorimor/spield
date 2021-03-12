import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from './util/logger';
import logger from 'pino-http';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(logger({ logger: pino }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
