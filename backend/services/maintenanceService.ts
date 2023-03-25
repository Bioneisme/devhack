import {Maintenance} from "../entities";

class MaintenanceService {
    async createMaintenance(name: string, category: string, description: string, price: number, time_to_complete: string) {
        const maintenance = await Maintenance.create({
            name,
            category,
            description,
            price,
            time_to_complete
        });
        await maintenance.save();

        return maintenance;
    }

    async getMaintenances() {
        return await Maintenance.findAll();
    }

    async getFilteredMaintenance() {
        const services = await Maintenance.findAll();
        let objects: any = {};
        for (const service of services) {
            if (objects[service.category] == null) {
                objects[service.category] = [];
            }
            objects[service.category].push(service);
        }

        return objects;
    }
}

export default new MaintenanceService();