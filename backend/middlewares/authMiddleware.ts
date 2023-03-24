import {Response, Request, NextFunction} from "express";
import {UserRequest} from "../types";
import {User} from "../entities";
import ApiError from "../exceptions/ApiError";
import tokenService from "../services/jwtService";


export default async function (req: Request, res: Response, next: NextFunction) {
    let token;

    if (req.headers && req.headers.authorization?.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded: any = tokenService.verifyAccessToken(token);

            if (decoded) {
                const id: number = decoded.id; // user id

                const user = await User.findByPk(id, {include: ['farm']});
                if (!user)
                    return next(ApiError.BadRequest('User not found', 'user_not_found'));
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