"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gymSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const name = joi_1.default.string().min(3).max(30).required();
const description = joi_1.default.string().min(3).max(30).required();
const location = joi_1.default.string().min(3).max(30).required();
const services = joi_1.default.array();
const owner = joi_1.default.string().min(3).max(30).required();
const ratings = joi_1.default.number().min(0).max(5);
const openings = joi_1.default.array().required();
const facilities = joi_1.default.array();
exports.gymSchema = joi_1.default.object({
    name,
    description,
    location,
    services,
    ratings,
    openings,
    facilities
});
//# sourceMappingURL=gym.validation.js.map