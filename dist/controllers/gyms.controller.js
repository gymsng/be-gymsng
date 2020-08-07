"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gymsController = void 0;
const middlewares_1 = require("../middlewares");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const validation_1 = require("../validation");
const models_1 = require("../models");
class gymsController {
}
exports.gymsController = gymsController;
gymsController.createGym = middlewares_1.catchAsync(async (req, res, next) => {
    if (req.session.isAdmin !== 1) {
        throw utils_1.createError(constants_1.STATUSCODE.UNAUTHORIZED, "you are not authorized to carry out this action");
    }
    await validation_1.validate(validation_1.gymSchema, req.body);
    const { name } = req.body;
    const existingGym = await models_1.Gyms.exists({ name });
    if (existingGym) {
        console.log(existingGym);
        throw utils_1.createError(constants_1.STATUSCODE.CONFLICT, "gym already exists");
    }
    const gym = await models_1.Gyms.create({ ...req.body, owner: req.session.userId });
    res.status(constants_1.STATUSCODE.SUCCESS).json({ message: "OK", data: gym });
});
gymsController.getAllGym = middlewares_1.catchAsync(async (req, res, next) => {
    const gyms = await models_1.Gyms.find({});
    res.status(constants_1.STATUSCODE.SUCCESS).json({ message: "OK", data: gyms });
});
gymsController.getSingleGym = middlewares_1.catchAsync(async (req, res, next) => {
    const gym = await models_1.Gyms.findById(req.params.id).populate('owner');
    res.status(constants_1.STATUSCODE.SUCCESS).json({ success: constants_1.FEEDBACK.SUCCESSMESSAGE, data: gym });
});
gymsController.updateGym = middlewares_1.catchAsync(async (req, res, next) => {
    const gym = await models_1.Gyms.findByIdAndUpdate(req.params.id, req.body);
    res.status(constants_1.STATUSCODE.SUCCESS).json({ success: constants_1.FEEDBACK.SUCCESSMESSAGE, data: gym });
});
gymsController.removeGym = middlewares_1.catchAsync(async (req, res, next) => {
    const gym = await await models_1.Gyms.findById(req.params.id).populate('owner');
    res.status(constants_1.STATUSCODE.SUCCESS).json({ success: constants_1.FEEDBACK.SUCCESSMESSAGE, data: gym });
});
//# sourceMappingURL=gyms.controller.js.map