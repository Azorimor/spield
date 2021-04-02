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

export const TYPEORM_HOST = process.env.TYPEORM_HOST || 'localhost';
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME || 'spield';
export const TYPEORM_PASSWORD =
  process.env.TYPEORM_PASSWORD || 'securePassword';
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE || 'spield';
let typeormPort = 5432;
if (process.env.TYPEORM_PORT) {
  typeormPort = parseInt(process.env.TYPEORM_PORT);
}
export const TYPEORM_PORT = typeormPort;
let typeormSync = false;
if (process.env.TYPEORM_SYNCHRONIZE) {
  typeormSync = process.env.TYPEORM_SYNCHRONIZE == 'true';
}
export const TYPEORM_SYNCHRONIZE = typeormSync;
let typeormLogging = true;
if (process.env.TYPEORM_LOGGING) {
  typeormLogging = process.env.TYPEORM_LOGGING == 'true';
}
export const TYPEORM_LOGGING = typeormLogging;

let typeormCacheDuration = 30000;
if (process.env.TYPEORM_CACHE_DURATION) {
  typeormCacheDuration = parseInt(process.env.TYPEORM_CACHE_DURATION);
}

let typeormCacheAlwaysEnabled = true;
if (process.env.TYPEORM_CACHE_ALWAYS_ENABLED) {
  typeormCacheAlwaysEnabled =
    process.env.TYPEORM_CACHE_ALWAYS_ENABLED == 'true';
}

interface typeormCache {
  type: 'redis';
  options: {
    host: string;
    port: string;
  };
  duration: number;
  alwaysEnabled: boolean;
}

export const TYPEORM_CACHE: typeormCache = {
  type: 'redis',
  options: {
    host: process.env.TYPEORM_CACHE_HOST || 'localhost',
    port: process.env.TYPEORM_CACHE_PORT || '6379'
  },
  duration: typeormCacheDuration,
  alwaysEnabled: typeormCacheAlwaysEnabled
};
