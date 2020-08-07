"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils/");
const config_1 = require("../config");
const constants_1 = require("../constants");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: [true, "name cannot be blank"] },
    fullname: { type: String, required: [true, "name cannot be blank"] },
    email: { type: String, required: [true, "email must be provided"] },
    isAdmin: { type: Number, default: constants_1.ROLES.USER },
    password: {
        type: String,
        required: [true, "must provide a password"],
        min: [8, "minimum password length is 8"],
        max: [128, "exceeded the max-length of passwordm"],
    },
}, {
    timestamps: true
});
userSchema.pre("save", async function () {
    if (this.isModified('password')) {
        this.password = await utils_1.hashHelper(this.password, config_1.BCRYPT_WORK_FACTOR);
    }
});
userSchema.methods.authPassword = function (password) {
    return utils_1.compareHashed(password, this.password);
};
userSchema.set('toJSON', {
    transform: (doc, { __v, password, createdAt, updatedAt, ...rest }) => rest
});
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=User.model.js.map