import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';
import { usersTable } from './users';

export const vourcherRequestsTable = pgTable('voucher_requests', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer()
        .notNull()
        .references(() => usersTable.id),
    amount: integer().notNull(),
    isApproved: varchar({ length: 255 }).notNull(),
    approvedAt: timestamp(),
    approvedBy: integer().references(() => usersTable.id),
    ...timestamps,
});

export interface VoucherRequest {
    id: number;
    userId: number;
    amount: number;
    isApproved: string;
    approvedAt: Date;
    approvedBy: number;
    createdAt: Date;
    updatedAt: Date;
}
