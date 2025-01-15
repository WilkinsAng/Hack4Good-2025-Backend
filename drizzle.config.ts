import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema',
    dialect: 'postgresql',
    dbCredentials: {
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        host: process.env.DB_HOST!,
        port: Number.parseInt(process.env.DB_PORT!),
        database: process.env.DB_NAME!,
        ssl: false, // Set to true if using SSL
    },
});
