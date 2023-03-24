import ApiError from "../exceptions/ApiError";
import {NextFunction, Request, Response} from "express";
import logger from "../config/logger";

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) { // if error is instance of ApiError

        logger.error({message: err?.message, error_info: err?.error_info, errors: err?.errors});

        return res.status(err.status).json({
            ok: false,
            message: err.message,
            error_info: err.error_info,
            errors: err.errors
        });
    }

    // if error is not handled by ApiError
    logger.error(err);
    return res.status(500).json({ok: false, message: 'Something went wrong', errors: err});
}