"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStore = void 0;
const express_session_1 = __importDefault(require("express-session"));
const config_1 = require("../config");
const connect_redis_1 = __importDefault(require("connect-redis"));
const ioredis_1 = __importDefault(require("ioredis"));
const config_2 = require("../config");
const chalk_1 = __importDefault(require("chalk"));
const RedisStore = connect_redis_1.default(express_session_1.default);
const client = new ioredis_1.default(config_2.REDIS_OPTIONS);
exports.loadStore = (app) => {
    return new Promise((resolve, reject) => {
        const store = new RedisStore({ client });
        app.use(express_session_1.default({ ...config_1.SESSION_OPTIONS, store, }));
        console.log(chalk_1.default.green("store Loaded"));
        resolve();
    });
};
//# sourceMappingURL=loadStore.js.map