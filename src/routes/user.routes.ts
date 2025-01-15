import express, { NextFunction, Request, Response } from 'express';
import { getProduct } from '../controllers/products';

const privateRouter = express.Router();

privateRouter.get('/', (req: Request, res: Response) => {
    res.send('This is a private route!');
});

privateRouter.get('/products', (req: Request, res: Response) => {
    res.send('Get ALL products');
});

privateRouter.get('/products/:id', getProduct);
export default privateRouter;
