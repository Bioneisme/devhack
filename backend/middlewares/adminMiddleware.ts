import {Response, Request, NextFunction} from "express";
import {UserRequest} from "../types";
import {Admin} from "../entities";
import ApiError from "../exceptions/ApiError";
import tokenService from "../services/jwtService";


export default async function (req: Request, res: Response, next: NextFunction) {
    let token;

    if (req.headers && req.headers.authorization?.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded: any = tokenService.verifyAccessToken(token);

            if (decoded) {
                const id: number = decoded.id; // admin id

                const user = await Admin.findByPk(id);
                if (!user)
                    return next(ApiError.BadRequest('Admin not found', 'admin_not_found'));

                (req as UserRequest).user = user;

                next();
            } else {
                return next(ApiError.UnauthorizedError());
            }
        } catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    }

    if (!token) {
        return next(ApiError.UnauthorizedError());
    }
}