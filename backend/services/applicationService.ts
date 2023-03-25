import {Application} from "../entities";
import ApiError from "../exceptions/ApiError";
import moment from "moment";

class ApplicationService {
    async getApplications() {
        return await Application.findAll();
    }

    async getApplicationById(id: number) {
        return await Application.findByPk(id);
    }

    async getApplicationByUserId(id: number) {
        return await Application.findAll({where: {user_id: id}});
    }

    async getApplicationsByStatus(status: string) {
        return await Application.findAll({where: {status}});
    }

    async getApplicationsByCategory(category: string) {
        return await Application.findAll({where: {category}});
    }

    async createApplication(user_id: number, title: string, status: string, description?: string, category?: string,
                            price?: number, date?: Date, executor?: string) {
        const application = await Application.create({
            user_id,
            title,
            status,
            description,
            category,
            price,
            date,
            executor
        });
        await application.save();

        return application;
    }

    async updateApplication(id: number, title: string, status: string, description?: string, category?: string,
                            price?: number, date?: Date, executor?: string) {
        const application = await Application.findByPk(id);
        if (!application) {
            return ApiError.BadRequest('Application not found', 'application_not_found');
        }

        const formattedDate = date != null ? moment(date).format('YYYY-MM-DD HH:mm') : null;

        await application.update({title, status, description, category, price, date: formattedDate, executor});
        await application.save();

        return application;
    }
}

export default new ApplicationService();