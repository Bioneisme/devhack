import dotenv from "dotenv";
dotenv.config();

export const NODE_ENV: string = process.env.NODE_ENV || 'development';

const DEFAULT_PG_URL: string = 'postgres://postgres:root@postgres:5432/postgres';
const DEFAULT_SERVER_PORT: number = 5000;
const DEFAULT_CLIENT_URL: string = 'http://localhost:3000';
const DEFAULT_JWT_ACCESS_SECRET: string = 'someSecretKey33485';
const DEFAULT_JWT_REFRESH_SECRET: string = 'someSecretKey33486';

export const PG_URL: string = process.env.PG_URL || DEFAULT_PG_URL;
export const SERVER_PORT: number = +(process.env.SERVER_PORT || DEFAULT_SERVER_PORT);
export const JWT_ACCESS_SECRET: string = process.env.JWT_ACCESS_SECRET || DEFAULT_JWT_ACCESS_SECRET;
export const JWT_REFRESH_SECRET: string = process.env.JWT_REFRESH_SECRET || DEFAULT_JWT_REFRESH_SECRET;
export const CLIENT_URL: string = process.env.CLIENT_URL || DEFAULT_CLIENT_URL;
export const CLIENT_URL_DEV: string = process.env.CLIENT_URL_DEV || DEFAULT_CLIENT_URL;
export const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY as string;
export const BOT_TOKEN: string = process.env.BOT_TOKEN as string;
export const LOGS_CHAT_ID: string = process.env.LOGS_CHAT_ID as string;