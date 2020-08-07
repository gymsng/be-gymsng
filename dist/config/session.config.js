"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_OPTIONS = exports.ABSOLUTE_SESSION_TIMEOUT = exports.SESSION_IDLE_TIMEOUT = exports.SESSION_NAME = exports.SESSION_SECRET = void 0;
const index_1 = require("./index");
const ONE_HOUR = 1000 * 60 * 60;
const THIRTY_MINUTES = ONE_HOUR / 2;
const SIX_HOURS = ONE_HOUR * 6;
const { env } = process;
_a = env.SESSION_SECRET, exports.SESSION_SECRET = _a === void 0 ? `please keep secret` : _a, _b = env.SESSION_NAME, exports.SESSION_NAME = _b === void 0 ? "sid" : _b, _c = env.SESSION_IDLE_TIMEOUT, exports.SESSION_IDLE_TIMEOUT = _c === void 0 ? THIRTY_MINUTES : _c;
exports.ABSOLUTE_SESSION_TIMEOUT = +(env.ABSOLUTE_SESSION_TIMEOUT || SIX_HOURS);
exports.SESSION_OPTIONS = {
    secret: exports.SESSION_SECRET,
    name: exports.SESSION_NAME,
    cookie: {
        maxAge: +exports.SESSION_IDLE_TIMEOUT,
        secure: index_1.IN_PROD,
        sameSite: false,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
};
//# sourceMappingURL=session.config.js.map