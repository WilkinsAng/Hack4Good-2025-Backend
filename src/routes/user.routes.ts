import express, { Request, Response } from 'express';

const privateRouter = express.Router();

privateRouter.get('/', (req: Request, res: Response) => {
    res.send('This is a private route!');
});

privateRouter.route('/user');
export default privateRouter;
