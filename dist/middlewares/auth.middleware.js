"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActive = exports.ensureIsLoggedIn = exports.ensureIsLoggedOut = void 0;
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const routes_1 = require("../routes");
const config_1 = require("../config");
exports.ensureIsLoggedOut = (req, res, next) => {
    if (routes_1.isLoggedIn(req)) {
        return next(utils_1.createError(constants_1.STATUSCODE.UNAUTHORIZED, "you are logged in already"));
    }
    next();
};
exports.ensureIsLoggedIn = (req, res, next) => {
    if (!routes_1.isLoggedIn(req)) {
        return next(utils_1.createError(constants_1.STATUSCODE.UNAUTHORIZED, "you must be logged in"));
    }
    next();
};
exports.isActive = async (req, res, next) => {
    if (routes_1.isLoggedIn(req)) {
        const now = Date.now();
        const { createdAt } = req.session;
        if (now > createdAt + config_1.ABSOLUTE_SESSION_TIMEOUT) {
            await routes_1.logOut(req, res);
            return next(utils_1.createError(constants_1.STATUSCODE.UNAUTHORIZED, "Session expired"));
        }
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map