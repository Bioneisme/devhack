import {NextFunction, Response, Request} from "express";
import maintenanceService from "../services/maintenanceService";
import validationService from "../services/validationService";

class MaintenanceController {
    async createMaintenance(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, category, description, price, time_to_complete} = req.body;
            validationService.createMaintenance(name, category, time_to_complete);
            const services = await maintenanceService.createMaintenance(name, category, description, price, time_to_complete)

            return res.json({ok: true, message: 'Maintenance successfully created', services});
        } catch (e) {
            next(e);
        }
    }

    async getMaintenances(req: Request, res: Response, next: NextFunction) {
        try {
            const services = await maintenanceService.getMaintenances();

            return res.json({ok: true, message: 'Maintenances successfully received', services});
        } catch (e) {
            next(e);
        }
    }

    async getFilteredMaintenance(req: Request, res: Response, next: NextFunction) {
        try {
            const services = await maintenanceService.getFilteredMaintenance();

            return res.json({ok: true, message: 'Maintenances successfully received', services});
        } catch (e) {
            next(e);
        }
    }

    async deleteMaintenance(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            await maintenanceService.deleteMaintenance(+id);

            return res.json({ok: true, message: 'Maintenance successfully deleted'});
        } catch (e) {
            next(e);
        }
    }
}

export default new MaintenanceController();