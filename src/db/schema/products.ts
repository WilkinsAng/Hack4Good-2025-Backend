import { sql } from "drizzle-orm";
import { integer, pgTable, varchar, check } from "drizzle-orm/pg-core";
import {timestamps} from "./columns.helpers";

export const productTable = pgTable('products', {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        name: varchar().notNull(),
        price: integer().notNull().default(0),
        description: varchar().default(""),
        ...timestamps
    },
    (table) => [{
        checkConstraint: check("price_check", sql`${table.price} >= 0`),
    }]);