import express, { Request, Response } from 'express';

const privateRouter = express.Router();

privateRouter.get('/', (req: Request, res: Response) => {
    res.send('This is a private route!');
});

privateRouter.get('/', (req, res) => {
        res.json({ message: `Welcome, ${(req.user as any).isAdmin ? 'Admin' : 'User'}!` });
    });

privateRouter.route('/user');
export default privateRouter;
