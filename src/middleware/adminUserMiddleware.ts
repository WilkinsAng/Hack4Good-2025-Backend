import {Request, Response, NextFunction} from "express";

function authorizeAdmin() {
    return (req: Request, res: Response, next: NextFunction) => {
        if(!req.user || !(req.user as any).isAdmin) {
            res.status(403).json({message: 'Access denied. Admins only.'});
        }
        next();
    };
};

export default authorizeAdmin;