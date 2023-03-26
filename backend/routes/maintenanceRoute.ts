import {Router} from "express";
import maintenanceController from "../controllers/maintenanceController";


const router: Router = Router();

router.post("/createService", maintenanceController.createMaintenance); // for admin
router.get("/getServices", maintenanceController.getMaintenances);
router.get("/getFilteredServices", maintenanceController.getFilteredMaintenance);

router.delete("/deleteService/:id", maintenanceController.deleteMaintenance); // for admin

export default router;