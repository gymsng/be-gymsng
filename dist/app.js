"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
exports.createApp = () => {
    const app = express_1.default();
    app.use(express_1.default.static("./public"));
    console.log(chalk_1.default.bold.underline.green("created app"));
    return app;
};
//# sourceMappingURL=app.js.map