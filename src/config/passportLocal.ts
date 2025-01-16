// src/config/passportLocal.ts
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {db} from '../db'
import {usersTable} from "../db/schema/users";
import { eq } from 'drizzle-orm';
import {verifyPassword} from "../middleware/hashPassword";

passport.use(new LocalStrategy(
    {usernameField:"email", passwordField:"password"},
    async (email, password, done) => {
        try {
            const userRow = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

            /**
             * Checking email with db
             */
            const user = userRow[0];
            if (!user) {
                return done(null, false, {message: 'Invalid email or password'});
            }
            /**
             * Checking password with hashed one in db
             */
            const isMatch = await verifyPassword(password, user.password);
            if (!isMatch) {
                return done(null, false, {message: 'Invalid email or password'});
            }

            /**
             * if successful
             */
            return done(null, user);
        } catch (err: unknown) {
            return done(err);
        }
    })
);