import {Router} from "express";
import adminController from "../controllers/adminController";
import adminMiddleware from "../middlewares/adminMiddleware";


const router: Router = Router();

router.post("/create", adminController.createAdmin);
router.post("/login", adminController.login);
router.get("/logout", adminController.logout);
router.get("/refresh", adminController.refresh);
router.get("/getMe", adminMiddleware, adminController.getMe);

export default router;