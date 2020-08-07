"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHashed = exports.hashHelper = void 0;
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = __importDefault(require("crypto"));
exports.hashHelper = (payload, factor) => new Promise(async (resolve, reject) => {
    try {
        const shaHashed = crypto_1.default.createHash('sha256').update(payload).digest("base64");
        const hashed = await bcryptjs_1.hash(shaHashed, factor);
        resolve(hashed);
    }
    catch (err) {
        reject(err);
    }
});
exports.compareHashed = (password, hashed) => {
    const shaHashed = crypto_1.default.createHash('sha256').update(password).digest("base64");
    return bcryptjs_1.compare(shaHashed, hashed);
};
//# sourceMappingURL=hash.utils.js.map