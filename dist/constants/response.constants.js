"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUSCODE = exports.FEEDBACK = void 0;
var FEEDBACK;
(function (FEEDBACK) {
    FEEDBACK["SUCCESSMESSAGE"] = "success";
    FEEDBACK["ERRORMESSAGE"] = "error";
})(FEEDBACK = exports.FEEDBACK || (exports.FEEDBACK = {}));
var STATUSCODE;
(function (STATUSCODE) {
    STATUSCODE[STATUSCODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUSCODE[STATUSCODE["NOCONTENT"] = 204] = "NOCONTENT";
    STATUSCODE[STATUSCODE["NOTFOUND"] = 404] = "NOTFOUND";
    STATUSCODE[STATUSCODE["CONFLICT"] = 409] = "CONFLICT";
    STATUSCODE[STATUSCODE["CREATED"] = 201] = "CREATED";
    STATUSCODE[STATUSCODE["SUCCESS"] = 200] = "SUCCESS";
    STATUSCODE[STATUSCODE["ERROR"] = 500] = "ERROR";
    STATUSCODE[STATUSCODE["BAD"] = 400] = "BAD";
})(STATUSCODE = exports.STATUSCODE || (exports.STATUSCODE = {}));
//# sourceMappingURL=response.constants.js.map