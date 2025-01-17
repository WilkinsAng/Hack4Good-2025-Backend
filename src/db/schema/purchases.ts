import { sql } from 'drizzle-orm';
import { integer, pgTable, varchar, check, boolean } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';
import { usersTable } from './users';
import { productTable } from './products';

export const purchaseTable = pgTable(
    'purchases',
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        buyerId: integer()
            .notNull()
            .references(() => usersTable.id),
        productId: integer()
            .notNull()
            .references(() => productTable.id),
        quantity: integer().notNull(),
        isApproved: boolean().notNull().default(false),
        approvedBy: integer().references(() => usersTable.id),
        ...timestamps,
    },
    (table) => [
        {
            checkConstraint: check(
                'quantity_check',
                sql`${table.quantity} > 0`
            ),
        },
    ]
);

export interface Purchase {
    id: number;
    buyerId: number;
    productId: number;
    quantity: number;
    isApproved: boolean;
    approvedBy: number;
    createdAt: Date;
    updatedAt: Date;
}
