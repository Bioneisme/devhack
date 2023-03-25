import {NextFunction, Request, Response} from "express";
import applicationService from "../services/applicationService";
import {UserRequest} from "../types";
import ApiError from "../exceptions/ApiError";
import validationService from "../services/validationService";

class ApplicationController {
    async getApplications(req: Request, res: Response, next: NextFunction) {
        try {
            const applications = await applicationService.getApplications();
            return res.json({ok: true, message: 'Applications successfully received', applications});
        } catch (e) {
            next(e);
        }
    }

    async getApplicationById(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const application = await applicationService.getApplicationById(+id);
            return res.json({ok: true, message: 'Application successfully received', application});
        } catch (e) {
            next(e);
        }
    }

    async getApplicationsByUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const applications = await applicationService.getApplicationByUserId(+id);
            return res.json({ok: true, message: 'Applications successfully received', applications});
        } catch (e) {
            next(e);
        }
    }

    async getMyApplications(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as UserRequest).user;
            if (!user) {
                return next(ApiError.UnauthorizedError());
            }
            const applications = await applicationService.getApplicationByUserId(+user.id);
            return res.json({ok: true, message: 'Applications successfully received', applications});
        } catch (e) {
            next(e);
        }
    }

    async getApplicationsByStatus(req: Request, res: Response, next: NextFunction) {
        try {
            const {status} = req.params;
            const applications = await applicationService.getApplicationsByStatus(status);
            return res.json({ok: true, message: 'Applications successfully received', applications});
        } catch (e) {
            next(e);
        }
    }

    async getApplicationsByCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const {category} = req.params;
            const applications = await applicationService.getApplicationsByCategory(category);
            return res.json({ok: true, message: 'Applications successfully received', applications});
        } catch (e) {
            next(e);
        }
    }

    async createApplication(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as UserRequest).user;
            if (!user) {
                return next(ApiError.UnauthorizedError());
            }
            const {title, status, description, category, price, date} = req.body;
            await validationService.createApplication(+user.id, title, status, category, price);
            const application = await applicationService.createApplication(+user.id, title, status, description,
                category, price, date);
            return res.json({ok: true, message: 'Application successfully created', application});
        } catch (e) {
            next(e);
        }
    }

    async updateApplication(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const {title, status, description, category, price, date} = req.body;
            await validationService.updateApplication(+id);
            const application = await applicationService.updateApplication(+id, title, status, description,
                category, price, date);
            return res.json({ok: true, message: 'Application successfully updated', application});
        } catch (e) {
            next(e);
        }
    }
}

export default new ApplicationController();