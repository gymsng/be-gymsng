"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const chalk_1 = __importDefault(require("chalk"));
exports.loadMongo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await mongoose_1.default.connect(config_1.RemoteDb || config_1.MONGO_URL, config_1.MONGO_OPTIONS);
            console.log(chalk_1.default.green("DATABASE CONNECTED"));
            mongoose_1.default.connection.on("error", (err) => {
                return console.error.bind(console, "DB connection error!");
            });
            mongoose_1.default.connection.on("disconected", console.error.bind(console, "DATABASE DISCONNECTED"));
            process.on("SIGINT", () => {
                console.log("mongoose default connection is disconnected due to application termination");
                process.exit(0);
            });
            resolve();
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    });
};
//# sourceMappingURL=loadMongo.js.map