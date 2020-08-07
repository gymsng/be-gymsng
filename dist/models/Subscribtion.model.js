"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribtion = void 0;
const mongoose_1 = require("mongoose");
const SubscribtionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: [true, "user is required"] },
    membership: { type: mongoose_1.Schema.Types.ObjectId, ref: "Membership", required: [true, "membership is required"] },
    status: { type: String, default: "pending" }
}, { timestamps: true });
exports.Subscribtion = mongoose_1.model(" Subscribtion", SubscribtionSchema);
//# sourceMappingURL=Subscribtion.model.js.map