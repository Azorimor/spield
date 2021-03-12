import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;
export const PROD: boolean = ENVIRONMENT === 'production';

export const PORT = process.env.PORT || '3000';

export const API_ACCESS_TOKEN_SECRET =
  process.env.API_ACCESS_TOKEN_SECRET ||
  '6TZ3moXKc0eE4WM17wTKEVBGMNH8iILYdJCZDLP9G5UYAxRyu2';
export const API_REFRESH_TOKEN_SECRET =
  process.env.API_REFRESH_TOKEN_SECRET ||
  '4138PhAz6MQCCSIBF5QrU7tGDHqKcZJWOdsX902YkNLFbjHJNi';
