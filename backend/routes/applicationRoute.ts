import {Router} from "express";
import applicationController from "../controllers/applicationController";


const router: Router = Router();

router.get("/getApplications", applicationController.getMyApplications); // for admin
router.get("/getApplicationById/:id", applicationController.getApplicationById); // for admin
router.get("/getApplicationsByUser/:id", applicationController.getApplicationsByUser); // for admin
router.get("/getMyApplications", applicationController.getMyApplications);


export default router;