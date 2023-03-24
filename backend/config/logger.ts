import moment from "moment";
import {createLogger, transports, format} from "winston";
import TelegramLogger from "winston-telegram";
import {BOT_TOKEN, LOGS_CHAT_ID, NODE_ENV} from "./settings";


const formatter = format((info) => {
    const {level} = info;
    info.level = `(${moment().utc().format('DD.MM.YYYY, HH:mm:ss')}) [${level}]`;
    return info;
})();

const transportsProd = [
    // Show logs in console
    new transports.Console({
        format: format.combine(
            formatter,
            format.simple()
        )
    })
];

const transportsDev = [
    // Show logs in console
    new transports.Console({
        format: format.combine(
            formatter,
            format.simple()
        )
    }),
    // Send logs to Telegram
    new TelegramLogger({
        token: BOT_TOKEN || 't',
        chatId: +LOGS_CHAT_ID || 1,
        batchingDelay: 2000
    })
];

const logger = createLogger({
    transports: NODE_ENV === 'production' ? transportsProd : transportsDev
});

export default logger;