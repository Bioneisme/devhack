import axios from "axios";
import {STRIPE_SECRET_KEY} from "../config/settings";
import QS from "querystring";
import {Application} from "../entities";

class PaymentService {
    async createPayment(user_id: number, amount: number, title: string, category: string) {
        const price_data = await axios.post("https://api.stripe.com/v1/prices", QS.stringify({
            unit_amount: amount * 100,
            currency: 'kzt',
            product: 'prod_NagtCzQ7TYH5K1'
        }), {
            headers: {
                Authorization: `Bearer ${STRIPE_SECRET_KEY}`
            }
        }).catch(e => {
            throw e;
        });

        const price = price_data.data.id;
        const application = await Application.create({
            user_id,
            title,
            price: amount,
            status: 'Не оплачено',
            category
        });
        await application.save();
        const res = await axios.post(`https://api.stripe.com/v1/payment_links?line_items[][price]=` +
            `${price}&line_items[][quantity]=1&after_completion[type]=redirect&after_completion[redirect][url]=https://devhack-api.13lab.tech/api/payments/callback/${application.id}`,
            {}, {
                headers: {
                    Authorization: `Bearer ${STRIPE_SECRET_KEY}`
                }
            }).catch(e => {
            throw e;
        });

        return res.data;
    }
}

export default new PaymentService();