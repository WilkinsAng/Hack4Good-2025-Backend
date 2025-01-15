import { sql } from "drizzle-orm";
import {integer, pgTable, varchar, check, boolean} from "drizzle-orm/pg-core";
import {timestamps} from "./columns.helpers";
import {usersTable} from "./users";
import {productTable} from "./products";

export const preorderTable = pgTable('preorders', {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        buyer_id: integer().notNull().references(() => usersTable.id),
        product_id: integer().notNull().references(() => productTable.id),
        quantity: integer().notNull(),
        price: integer().notNull().default(0),
        description: varchar().default(""),
        isApproved: boolean().notNull().default(false),
        approved_by: integer().references(() => usersTable.id),
        status: varchar().default("pending"),
        ...timestamps
    },
    (table) => [{
        checkConstraint: check("price_check", sql`${table.price} >= 0`), quantity: check("quantity_check", sql`${table.quantity} > 0`)
    }]);