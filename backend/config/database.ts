import {Sequelize} from "sequelize-typescript";
import {PG_URL, NODE_ENV} from "./settings";
import logger from "./logger";
import entities from "../entities";

const isDev = NODE_ENV === 'development';

export class DB {
    private static sequelize: Sequelize;

    public static async initDB() {
        DB.sequelize = new Sequelize(PG_URL, {
            dialect: 'postgres',
            host: 'postgres',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });

        DB.sequelize.addModels(entities); // Add entities to sequelize

        try {
            await DB.sequelize.authenticate(); // Connection
            await DB.sequelize.sync({alter: isDev}); // Sync DB, alter tables in dev mode
            logger.info('Connection to the database has been established successfully.');
        } catch (e) {
            logger.error(`Unable to connect to the database: ${e}`);
            throw e;
        }
    }

    public static async closeDB() {
        try {
            await DB.sequelize.close();
            logger.info('Connection to the database has been closed successfully.');
        } catch (e) {
            logger.error(`Unable to close the database connection: ${e}`);
            throw e
        }
    }
}