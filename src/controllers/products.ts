import { NextFunction, Request, Response } from 'express';
import { db } from '../db/index';

export async function getProduct(req: Request, res: Response) {
    const productId = Number.parseInt(req.params.id);
    const product = await db.query.productTable.findFirst({
        columns: {
            id: true,
            name: true,
            price: true,
            description: true,
        },
        where: (productRow, { eq }) => eq(productRow.id, productId),
    });
    if (product === undefined) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }
    res.status(200).json(product);
}
