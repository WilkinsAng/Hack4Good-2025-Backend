import { Request, Response, NextFunction } from 'express';
import { User } from '../db/schema/schema';

function authorizeAdmin() {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !(req.user as User).isAdmin) {
            res.status(403).json({ message: 'Access denied. Admins only.' });
        }
        next();
    };
}

export default authorizeAdmin;
