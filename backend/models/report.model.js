"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var ReportSchema = new mongoose_1.Schema({
    startTime: { type: String },
    endTime: { type: String },
    userAgents: { type: [String] },
    passed: { type: Number },
    total: { type: Number },
    skipped: { type: Number },
    failed: { type: Number },
    fixtures: { type: [] },
    warnings: { type: [String] }
});
exports.default = mongoose_1.default.model('Report', ReportSchema);
