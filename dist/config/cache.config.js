"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_OPTIONS = void 0;
const { REDIS_PORT = 6379, REDIS_HOST = 'localhost', REDIS_PASSWORD = "secret" } = process.env;
exports.REDIS_OPTIONS = {
    host: REDIS_HOST,
    port: +REDIS_PORT,
    password: REDIS_PASSWORD
};
//# sourceMappingURL=cache.config.js.map