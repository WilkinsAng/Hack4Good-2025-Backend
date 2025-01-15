import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    ...timestamps,
});
