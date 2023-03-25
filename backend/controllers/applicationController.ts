import {NextFunction, Request, Response} from "express";
import applicationService from "../services/applicationService";
import {UserRequest} from "../types";
import ApiError from "../exceptions/ApiError";

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
}

export default new ApplicationController();