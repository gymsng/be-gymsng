"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFound = exports.catchAsync = void 0;
exports.catchAsync = (handler) => (...args) => handler(...args).catch(args[2]);
exports.NotFound = (req, res, next) => {
    res.status(404).json({ message: "not found" });
};
exports.ServerError = (err, req, res, next) => {
    if (!err.status) {
        console.log(err);
    }
    res.status(err.status || 500).json({ success: false, message: err.message || "internal server errors" });
};
//# sourceMappingURL=error.middleware.js.map