import { Request, Response, NextFunction } from 'express';

class PaymentController {
    async callback(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);
            return res.json({ok: true});
        } catch (e) {
            next(e);
        }
    }

    async createPayment(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);
            return res.json({ok: true});
        } catch (e) {
            next(e);
        }
    }
}

export default new PaymentController();