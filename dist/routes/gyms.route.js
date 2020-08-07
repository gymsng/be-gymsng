"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gymsRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.gymsRoute = express_1.Router();
exports.gymsRoute.get("/", controllers_1.gymsController.getAllGym);
exports.gymsRoute.get("/:id", controllers_1.gymsController.getSingleGym);
exports.gymsRoute.post("/create", middlewares_1.ensureIsLoggedIn, controllers_1.gymsController.createGym);
exports.gymsRoute.put("/:id", middlewares_1.ensureIsLoggedIn, controllers_1.gymsController.updateGym);
exports.gymsRoute.delete("/:id", middlewares_1.ensureIsLoggedIn, controllers_1.gymsController.removeGym);
//# sourceMappingURL=gyms.route.js.map