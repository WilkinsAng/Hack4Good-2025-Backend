import {Strategy as JwtStrategy, ExtractJwt} from "passport-jwt";
import passport from "passport";
import {db} from "../db";
import {usersTable} from "../db/schema/users";
import {eq} from "drizzle-orm";



passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "default_secret"
    /*
      issuer = 'accounts.examplesoft.com';
      audience = 'yoursite.net';
     */
}, async (jwtPayload, done) => {
    try {
        const userRow = await db.select().from(usersTable).where(eq(usersTable.id, jwtPayload.id)).limit(1);
        const user = userRow[0];

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err: unknown) {
        return done(err, false);

    }
}))

