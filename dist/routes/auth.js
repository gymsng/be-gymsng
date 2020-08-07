"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.logIn = exports.isLoggedIn = void 0;
const config_1 = require("../config");
exports.isLoggedIn = (req) => !!req.session.userId;
exports.logIn = (req, userId, role) => {
    req.session.userId = userId;
    req.session.isAdmin = role;
    req.session.createdAt = Date.now();
};
exports.logOut = (req, res) => new Promise((resolve, reject) => {
    req.session.destroy((err) => {
        if (err)
            reject(err);
        res.clearCookie(config_1.SESSION_NAME);
        resolve();
    });
});
//# sourceMappingURL=auth.js.map