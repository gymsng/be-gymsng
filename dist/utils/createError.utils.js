"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = exports.RequestError = void 0;
class HttpError extends Error {
}
class RequestError extends HttpError {
    constructor(message) {
        super(message);
        this.status = 200;
    }
}
exports.RequestError = RequestError;
function createError(status, message) {
    const error = new RequestError(message);
    error.status = status;
    return error;
}
exports.createError = createError;
//# sourceMappingURL=createError.utils.js.map