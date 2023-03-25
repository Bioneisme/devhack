import {Request, Response, NextFunction} from 'express';
import {UserRequest} from "../types";
import ApiError from "../exceptions/ApiError";
import validationService from "../services/validationService";
import paymentService from "../services/paymentService";

class PaymentController {
    async callback(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            await paymentService.callback(+id);

            return res.redirect('https://devhack.13lab.tech');
        } catch (e) {
            next(e);
        }
    }

    async createPayment(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as UserRequest).user;
            if (!user) {
                return next(ApiError.UnauthorizedError());
            }
            const {price, title, category} = req.body;
            validationService.createPayment(price, title, category);
            const payment = await paymentService.createPayment(+user.id, price, title, category);

            return res.json({ok: true, message: 'Payment created', payment});
        } catch (e) {
            next(e);
        }
    }
}

export default new PaymentController();