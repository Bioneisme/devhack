import {Application} from "../entities";

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
}

export default new ApplicationService();