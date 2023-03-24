import {NextFunction, Response, Request} from "express";
import logger from "../config/logger";

export function logging(req: Request, res: Response, next: NextFunction) {
    const startTimer = Date.now(); // start timer
    res.on('finish', () => { // when response is finished
        const ms = Date.now() - startTimer; // calculate the time it took to respond in ms

        // log the request. 'x-forwarded-for' - is the ip address of the client (header)
        logger.info(`(${req.headers['x-forwarded-for'] || req.socket.remoteAddress || null}) [${req.method}] ` +
            `${req.originalUrl}: ${res.statusCode} ${JSON.stringify(req.body)} - ${ms}ms`);
    });

    next();
}