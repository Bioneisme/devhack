import {NextFunction, Request, Response} from 'express';
import {UserRequest} from "../types";
import adminService from "../services/adminService";
import validationService from "../services/validationService";

class AdminController {
    async createAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const {login, password} = req.body;
            validationService.adminLog(login, password);
            const adminData = await adminService.createAdmin(login, password);
            return res.json({ok: true, message: 'Admin successfully created', admin: adminData});
        } catch (e) {
            next(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {login, password} = req.body;
            validationService.adminLog(login, password);
            const adminData = await adminService.login(login, password);
            res.cookie('refreshToken', adminData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                sameSite: 'none',
                secure: true,
                httpOnly: true
            });
            return res.json({ok: true, message: 'Admin successfully logged in', user: adminData});
        } catch (e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await adminService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json({ok: true, message: 'Admin successfully logged out', token});
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const adminData = await adminService.refresh(refreshToken);
            res.cookie('refreshToken', adminData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                sameSite: 'none',
                secure: true,
                httpOnly: true
            });
            return res.json({ok: true, message: 'Admin successfully refreshed', user: adminData});
        } catch (e) {
            next(e);
        }
    }

    async getMe(req: Request, res: Response, next: NextFunction) {
        try {
            const {user} = req as UserRequest;
            return res.json({ok: true, message: 'Get admin', user});
        } catch (e) {
            next(e);
        }
    }
}

export default new AdminController();