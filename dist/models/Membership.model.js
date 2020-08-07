"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membership = void 0;
const mongoose_1 = require("mongoose");
const MembershipSchema = new mongoose_1.Schema({
    gym: { type: mongoose_1.Schema.Types.ObjectId, required: [true, "user is required"] },
    type: { type: String, default: "workout", required: [true, "you must specify a membership type"] },
    duration: { type: Number, min: [1, "you must specify a period of time"] },
    price: { type: Number, required: [true, "you must specify amount"] },
    discountPrice: { type: Number },
}, { timestamps: true });
exports.Membership = mongoose_1.model("Bookings", MembershipSchema);
//# sourceMappingURL=Membership.model.js.map