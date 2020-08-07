"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.userRoute = express_1.Router();
exports.userRoute.get('/', middlewares_1.ensureIsLoggedIn, controllers_1.userController.index);
exports.userRoute.post("/register", middlewares_1.ensureIsLoggedOut, controllers_1.userController.registerUser);
exports.userRoute.post("/login", middlewares_1.ensureIsLoggedOut, controllers_1.userController.loginUser);
exports.userRoute.post("/logout", middlewares_1.ensureIsLoggedIn, controllers_1.userController.logOutUser);
exports.userRoute.post("/registerAdmin", middlewares_1.ensureIsLoggedOut, controllers_1.userController.registerAdmin);
exports.userRoute.post("/registerSuperAdmin", middlewares_1.ensureIsLoggedIn, controllers_1.userController.registerSuperAdmin);
//# sourceMappingURL=user.routes.js.map