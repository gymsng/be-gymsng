"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gyms = void 0;
const mongoose_1 = require("mongoose");
const GymSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "gym must have a name"] },
    location: { type: String, required: [true, "location cannot be empty"] },
    services: { type: Array, default: [] },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    openings: [{ open: { type: String }, close: { type: String } }],
    description: { type: String },
    ratings: { type: Number, max: [5, "rating cannot exceed 5"] },
    facilities: { type: Array, default: [] },
}, { timestamps: true });
exports.Gyms = mongoose_1.model("Gyms", GymSchema);
//# sourceMappingURL=Gyms.model.js.map