"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadMongo_1 = require("./loadMongo");
const loadRoutes_1 = require("./loadRoutes");
const loadStore_1 = require("./loadStore");
const chalk_1 = __importDefault(require("chalk"));
function loadAppResources(app) {
    console.log(chalk_1.default.bold.blue("loading app resources..."));
    return Promise.all([
        loadMongo_1.loadMongo(),
        loadStore_1.loadStore(app),
        loadRoutes_1.loadRoutes(app)
    ]).then(() => console.log(chalk_1.default.bold.green("app resources Loaded")));
}
exports.default = loadAppResources;
//# sourceMappingURL=index.js.map