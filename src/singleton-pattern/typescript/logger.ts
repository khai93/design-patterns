export {}

enum LogType {
    Message,
    Error,
    Warn
}

class Logger {
    private static _instance: Logger;

    private constructor() {}

    /**
     * @returns current instance of the logger
     */
    public static getInstance(): Logger {
        if (!Logger._instance) {
            Logger._instance = new Logger();
        }
        
        return Logger._instance;
    }

    /**
     * Log a message based on logTYpe
     * @param message 
     * @param logType 
     */
    public log(message: string, logType: LogType) {
        switch(logType) {
            default:
            case LogType.Message:
                console.log(message);
                break;
            case LogType.Error:
                console.error(message);
                // send to external logger
                break;
            case LogType.Warn:
                console.warn(message);
                // send to external logger
                break;
        }
    }
}


// Use Case

const logger = Logger.getInstance();

logger.log("Im safe!", LogType.Message);
logger.log("Something happened at somewhere!", LogType.Error);
logger.log("This shouldn't happen but it's not serious!", LogType.Warn);
