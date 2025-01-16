import { Request, Response } from 'express';
import { getProductById } from '../services/products';

export async function getProduct(req: Request, res: Response) {
    const productId = Number.parseInt(req.params.id);
    const product = await getProductById(productId);
    if (product === undefined) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }
    res.status(200).json(product);
}
