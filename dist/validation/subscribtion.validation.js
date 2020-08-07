"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const genString = joi_1.default.string().alphanum().required();
const genNumber = joi_1.default.number().min(1).required();
const subscribtionSchema = joi_1.default.object({
    user: genString,
    membership: genString,
    staus: genString,
});
//# sourceMappingURL=subscribtion.validation.js.map