import { db } from '../db/index';

export async function getProductById(
    id: number
): Promise<ProductResponse | undefined> {
    const product = await db.query.productTable.findFirst({
        columns: {
            id: true,
            name: true,
            price: true,
            description: true,
        },
        where: (productRow, { eq }) => eq(productRow.id, id),
    });
    if (product === undefined) {
        return undefined;
    }
    return {
        ...product,
        description: product.description || '',
    };
}
