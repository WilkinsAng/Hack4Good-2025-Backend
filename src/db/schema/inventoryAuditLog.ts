import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from './users';

export const inventoryAuditLogTable = pgTable('inventory_audit_log', {
    createdAt: timestamp().notNull().defaultNow(),
    userId: integer()
        .notNull()
        .references(() => usersTable.id),
    message: varchar({ length: 255 }).notNull(),
});

export interface inventoryAuditLog {
    createdAt: Date;
    userId: number;
    message: string;
}
