"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loaders_1 = __importDefault(require("./loaders"));
const app_1 = require("./app");
const config_1 = require("./config");
const http_1 = __importDefault(require("http"));
const chalk_1 = __importDefault(require("chalk"));
const app = app_1.createApp();
loaders_1.default(app).then(() => {
    const httpServer = http_1.default.createServer(app);
    httpServer.listen(config_1.PORT, () => console.log(chalk_1.default.bold.yellow(`server is running at http://localhost:${config_1.PORT}`)));
});
//# sourceMappingURL=index.js.map