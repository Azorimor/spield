import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;
export const PROD: boolean = ENVIRONMENT === 'production';

export const MONGODB_URI = PROD
  ? process.env.MONGODB_URI
  : process.env.MONGODB_URI_LOCAL;

export const PORT = process.env.PORT || '3000';
