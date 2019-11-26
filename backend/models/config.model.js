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
var ConfigSchema = new mongoose_1.Schema({
    browsers: {
        type: [String],
        required: true
    },
    src: {
        type: [String],
        required: true
    },
    reporter: {
        name: { type: String },
        output: { type: String, default: "./reports/report.json" }
    },
    color: {
        type: Boolean,
        default: true
    },
    skipJsErrors: {
        type: Boolean,
        default: true
    }
});
exports.default = mongoose_1.default.model('Config', ConfigSchema);
