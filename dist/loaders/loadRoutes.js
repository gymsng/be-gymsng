"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const chalk_1 = __importDefault(require("chalk"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("../middlewares");
const config_1 = require("../config");
exports.loadRoutes = (app) => new Promise((resolve, reject) => {
    app.use(express_1.default.json());
    const client = config_1.IN_PROD ? "https://fittech.me/" : 'http://localhost:3000';
    app.use(cors_1.default({ credentials: true, origin: 'http://localhost:3000' }));
    app.use(middlewares_1.catchAsync(middlewares_1.isActive));
    app.use("/v1", routes_1.apiRoute);
    app.use(middlewares_1.NotFound);
    app.use(middlewares_1.ServerError);
    console.log(chalk_1.default.green("Routes Loaded"));
    resolve();
});
//# sourceMappingURL=loadRoutes.js.map