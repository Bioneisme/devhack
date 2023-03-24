import {Router} from "express";
import authMiddleware from "../middlewares/authMiddleware";
import userController from "../controllers/userController";


const router: Router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/refresh", userController.refresh);

router.get("/getMe", authMiddleware, userController.getMe);


export default router;