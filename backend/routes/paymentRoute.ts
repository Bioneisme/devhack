import {Router} from "express";
import paymentController from "../controllers/paymentController";

const router: Router = Router();

router.get("/callback", paymentController.callback);


export default router;