"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const utils_1 = require("../utils");
const constants_1 = require("../constants");
exports.validate = async (schema, payload) => {
    try {
        await schema.validateAsync(payload, { abortEarly: false });
    }
    catch (err) {
        throw utils_1.createError(constants_1.STATUSCODE.BAD, err);
    }
};
//# sourceMappingURL=validate.js.map