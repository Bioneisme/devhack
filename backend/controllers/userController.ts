import {NextFunction, Request, Response} from "express";
import {UserRequest} from "../types";
import userService from "../services/userService";
import validationService from "../services/validationService";

class UserController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const {phone, password, name} = req.body;
            await validationService.register(phone, password);
            const userData = await userService.registration(phone, password, name);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            });
            return res.json({ok: true, message: 'User successfully registered', user: userData});
        } catch (e) {
            next(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {phone, password} = req.body;
            validationService.login(phone, password);
            const userData = await userService.login(phone, password);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            });
            return res.json({ok: true, message: 'User successfully logged in', user: userData});
        } catch (e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json({ok: true, message: 'User successfully logged out', token});
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            });
            return res.json({ok: true, message: 'User successfully refreshed', user: userData});
        } catch (e) {
            next(e);
        }
    }

    async getMe(req: Request, res: Response, next: NextFunction) {
        try {
            const {user} = req as UserRequest;
            return res.json({ok: true, message: 'Get user', user});
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController();