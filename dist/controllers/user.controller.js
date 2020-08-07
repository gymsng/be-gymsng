"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const validation_1 = require("../validation");
const constants_1 = require("../constants");
const middlewares_1 = require("../middlewares");
const utils_1 = require("../utils");
const models_1 = require("../models");
const auth_1 = require("../routes/auth");
class userController {
}
exports.userController = userController;
userController.index = middlewares_1.catchAsync(async (req, res, next) => {
    const user = await models_1.User.findById(req.session.userId);
    return res.status(constants_1.STATUSCODE.SUCCESS).json({ message: "OK", data: user });
});
userController.registerUser = middlewares_1.catchAsync(async (req, res, next) => {
    await validation_1.validate(validation_1.regSchema, req.body);
    const { username, fullname, email, password, isAdmin } = req.body;
    const existingUser = await models_1.User.exists({ email });
    if (existingUser) {
        throw utils_1.createError(constants_1.STATUSCODE.CONFLICT, "invalid email");
    }
    const user = await models_1.User.create({ username, fullname, email, password, isAdmin: 0 });
    auth_1.logIn(req, user.id, user.isAdmin);
    return res.status(constants_1.STATUSCODE.CREATED).json({ status: constants_1.FEEDBACK.SUCCESSMESSAGE, data: user });
});
userController.registerAdmin = middlewares_1.catchAsync(async (req, res, next) => {
    await validation_1.validate(validation_1.regSchema, req.body);
    const { username, fullname, email, password } = req.body;
    const existingUser = await models_1.User.exists({ email });
    if (existingUser) {
        throw utils_1.createError(constants_1.STATUSCODE.CONFLICT, "invalid email");
    }
    const newAdmin = await models_1.User.create({ username, fullname, email, password, isAdmin: 1 });
    auth_1.logIn(req, newAdmin.id, newAdmin.isAdmin);
    return res.status(constants_1.STATUSCODE.CREATED).json({ status: constants_1.FEEDBACK.SUCCESSMESSAGE, data: newAdmin });
});
userController.registerSuperAdmin = middlewares_1.catchAsync(async (req, res, next) => {
    await validation_1.validate(validation_1.regSchema, req.body);
    const { username, fullname, email, password } = req.body;
    const { isAdmin } = req.session;
    if (isAdmin !== constants_1.ROLES.SUPERADMIN) {
        throw utils_1.createError(constants_1.STATUSCODE.UNAUTHORIZED, "you cant create a Super admin");
    }
    const existingUser = await models_1.User.exists({ email });
    if (existingUser) {
        throw utils_1.createError(constants_1.STATUSCODE.CONFLICT, "invalid email");
    }
    const newSuperAdmin = await models_1.User.create({ username, fullname, email, password, isAdmin: constants_1.ROLES.SUPERADMIN });
    return res.status(constants_1.STATUSCODE.CREATED).json({ status: constants_1.FEEDBACK.SUCCESSMESSAGE, data: newSuperAdmin });
});
userController.loginUser = middlewares_1.catchAsync(async (req, res, next) => {
    await validation_1.validate(validation_1.loginSchema, req.body);
    const { email, password } = req.body;
    const user = await models_1.User.findOne({ email });
    if (!user || !await user.authPassword(password)) {
        throw utils_1.createError(constants_1.STATUSCODE.BAD, "invalid email or password");
    }
    auth_1.logIn(req, user.id, user.isAdmin);
    return res.status(constants_1.STATUSCODE.SUCCESS).json({ message: "OK", data: user });
});
userController.logOutUser = middlewares_1.catchAsync(async (req, res, next) => {
    await auth_1.logOut(req, res);
    return res.status(constants_1.STATUSCODE.SUCCESS).json({ message: "OK" });
});
//# sourceMappingURL=user.controller.js.map