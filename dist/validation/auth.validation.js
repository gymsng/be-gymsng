"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.regSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const username = joi_1.default.string().alphanum().min(3).max(30).required();
const fullname = joi_1.default.string().min(3).max(128).trim().required();
const password = joi_1.default.string().min(8).max(128).regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message('"{#label}" must contain one uppercase, one lowercase, and one digit').required();
const confirmPassword = joi_1.default.valid(joi_1.default.ref('password'));
const email = joi_1.default.string().email().min(8).max(254).lowercase().trim().required();
exports.regSchema = joi_1.default.object({
    fullname,
    username,
    email,
    password,
    confirmPassword
});
exports.loginSchema = joi_1.default.object({
    email,
    password
});
//# sourceMappingURL=auth.validation.js.map