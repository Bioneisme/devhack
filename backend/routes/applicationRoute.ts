import {Router} from "express";
import applicationController from "../controllers/applicationController";
import authMiddleware from "../middlewares/authMiddleware";


const router: Router = Router();

router.get("/getApplications", applicationController.getApplications); // for admin
router.get("/getApplicationById/:id", applicationController.getApplicationById); // for admin
router.get("/getApplicationsByUser/:id", applicationController.getApplicationsByUser); // for admin
router.get("/getApplicationsByStatus/:status", applicationController.getApplicationsByStatus); // for admin
router.get("/getApplicationsByCategory/:category", applicationController.getApplicationsByCategory); // for admin
router.get("/getMyApplications", authMiddleware, applicationController.getMyApplications);

router.post("/createApplication", authMiddleware, applicationController.createApplication);
router.patch("/updateApplication/:id", applicationController.updateApplication);


export default router;