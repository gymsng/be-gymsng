"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_OPTIONS = exports.MONGO_URL = exports.RemoteDb = exports.MONGO_DATABASE = exports.MONGO_PORT = exports.MONGO_HOST = exports.MONGO_PASSWORD = exports.MONGO_USERNAME = void 0;
_a = process.env, _b = _a.MONGO_USERNAME, exports.MONGO_USERNAME = _b === void 0 ? 'admin' : _b, _c = _a.MONGO_PASSWORD, exports.MONGO_PASSWORD = _c === void 0 ? 'secret' : _c, _d = _a.MONGO_HOST, exports.MONGO_HOST = _d === void 0 ? 'localhost' : _d, _e = _a.MONGO_PORT, exports.MONGO_PORT = _e === void 0 ? '27017' : _e, _f = _a.MONGO_DATABASE, exports.MONGO_DATABASE = _f === void 0 ? 'auth' : _f, exports.RemoteDb = _a.RemoteDb;
exports.MONGO_URL = `mongodb://${exports.MONGO_USERNAME}:${encodeURIComponent(exports.MONGO_PASSWORD)}@${exports.MONGO_HOST}:${exports.MONGO_PORT}/${exports.MONGO_DATABASE}`;
exports.MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//# sourceMappingURL=db.config.js.map