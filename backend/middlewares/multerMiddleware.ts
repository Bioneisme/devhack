import multer from "multer";
import {NextFunction, Request, Response} from "express";
import logger from "../config/logger";

const storage = multer.memoryStorage(); // multer memory storage

const upload = multer({storage: storage}).single('photo');

export function multerMiddleware(req: Request, res: Response, next: NextFunction) {
    upload(req, res, function (err) {
        if (err) {
            logger.error(`Error: ${err}. Acceptable files: photo`);
            res.status(400).json({ok: false, message: `${err}. Acceptable files: photo`});
            return;
        }

        next();
    });
}