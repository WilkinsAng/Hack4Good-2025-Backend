import express from 'express';
import publicRouter from './routes/public.routes';
import privateRouter from './routes/user.routes';
import adminRouter from "./routes/admin.routes";
import passport from "passport";
import './config/passportJWT';
import'./config/passportLocal';
import authorizeAdmin from "./middleware/adminUserMiddleware";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.use(express.json());

app.use(passport.initialize());

app.use('/user',
    passport.authenticate('jwt', { session: false }),
    privateRouter);

app.use('/admin',
    passport.authenticate('jwt', { session: false }),
    authorizeAdmin(), adminRouter);

app.use('/public', publicRouter);
