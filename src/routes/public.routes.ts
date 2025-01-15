import express, { Request, Response } from 'express';

const publicRouter = express.Router();

publicRouter.get('/', (req: Request, res: Response) => {
    res.send('This is a public route!');
});

publicRouter.post('/login', (req: Request, res: Response) => {
    res.send('Login route');
});

export default publicRouter;
