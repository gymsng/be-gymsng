"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoute = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
const gyms_route_1 = require("./gyms.route");
exports.apiRoute = express_1.Router();
exports.apiRoute.use("/users", user_routes_1.userRoute);
exports.apiRoute.use("/gyms", gyms_route_1.gymsRoute);
__exportStar(require("./auth"), exports);
//# sourceMappingURL=index.js.map