import {Router} from "express";
import authMiddleware from "../middlewares/authMiddleware";
import paymentController from "../controllers/paymentController";

const router: Router = Router();

router.post("/callback", paymentController.callback);
router.post("/createPayment", authMiddleware, paymentController.createPayment);


export default router;