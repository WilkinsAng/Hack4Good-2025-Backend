import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const user = process.env.DB_USER!;
const password = process.env.DB_PASSWORD!;
const host = process.env.DB_HOST!;
const port = process.env.DB_PORT!;
const dbName = process.env.DB_NAME!;
export const db = drizzle(`postgres://${user}:${password}@${host}:${port}/${dbName}`);
