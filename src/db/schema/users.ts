import { boolean, check, integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';
import { sql } from 'drizzle-orm';

export const usersTable = pgTable(
    'users',
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        name: varchar({ length: 255 }).notNull(),
        email: varchar({ length: 255 }),
        password: varchar({ length: 255 }).notNull(),
        isAdmin: boolean().default(false),
        credits: integer().default(0).notNull(),
        isSuspended: boolean().default(false),
        ...timestamps,
    },
    (table) => [
        {
            checkContraints: check('credit_check', sql`${table.credits} >= 0`),
        },
    ]
);

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    credits: number;
    isSuspended: boolean;
    createdAt: Date;
    updatedAt: Date;
}
