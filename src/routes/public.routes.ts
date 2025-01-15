import express, { Request, Response } from 'express';
import passport from "passport";
import jwt from "jsonwebtoken";


const publicRouter = express.Router();

publicRouter.get('/', (req: Request, res: Response) => {
    res.send('This is a public route!');
});

/**
 * sorry but idk the types of err, user and info
 */
publicRouter.post('/login', (req: Request, res: Response, next) => {
    passport.authenticate('local', {session: false}, (err: unknown, user: any, info: any) => {
        if(err || !user) {
            return res.status(400).json({message: info?.message || "Login Failed"});
        }

    const token = jwt.sign(
        { id: user.id, name:user.name, isAdmin: user.isAdmin },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: '1h' }
    );

        /**
         * return user for frontend, may change
         */
    res.json({ token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            credits: user.credits,
            isSuspended: user.isSuspended
        }
    });
})(req, res, next);
});

export default publicRouter;
