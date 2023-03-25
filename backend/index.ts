import cors from "cors";
import {logging} from "./middlewares/loggingMiddleware";
import errorMiddleware from "./middlewares/errorMiddleware";
import userRoute from "./routes/userRoute";
import adminRoute from "./routes/adminRoute";
import applicationRoute from "./routes/applicationRoute";
import maintenanceRoute from "./routes/maintenanceRoute";
import paymentRoute from "./routes/paymentRoute";
import {CLIENT_URL, CLIENT_URL_DEV, SERVER_PORT} from "./config/settings";
import logger from "./config/logger";
import {DB} from "./config/database";
import cookieParser from "cookie-parser";
import express, {Application} from "express";

const app: Application = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
    credentials: true,
    origin: [CLIENT_URL, CLIENT_URL_DEV]
}));
app.use(cookieParser());
app.use(logging); // Logging all routes
app.use("/api/users", userRoute);
app.use("/api/admins", adminRoute);
app.use("/api/applications", applicationRoute);
app.use("/api/services", maintenanceRoute);
app.use("/api/payments", paymentRoute);
app.use(errorMiddleware); // Error handling

app.listen(SERVER_PORT, async () => {
    logger.info(`Server Started on port ${SERVER_PORT}`);
    await DB.initDB(); // Init DB connection
});

// Graceful shutdown
process.once('SIGINT', async () => {
    logger.info(`Server Stopped by SIGINT process`);
    await DB.closeDB(); // Close DB connection before exit
});
process.once('SIGTERM', async () => {
    logger.info(`Server Stopped by SIGTERM process`);
    await DB.closeDB(); // Close DB connection before exit
});