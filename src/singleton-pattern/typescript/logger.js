"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    LogType[LogType["Message"] = 0] = "Message";
    LogType[LogType["Error"] = 1] = "Error";
    LogType[LogType["Warn"] = 2] = "Warn";
})(LogType || (LogType = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger._instance) {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    };
    Logger.prototype.log = function (message, logType) {
        switch (logType) {
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
    };
    return Logger;
}());
// Use Case
var logger = Logger.getInstance();
logger.log("Im safe!", LogType.Message);
logger.log("Something happened at somewhere!", LogType.Error);
logger.log("This shouldn't happen but it's not serious!", LogType.Warn);
