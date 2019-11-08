import mongoose, { Schema, Document } from 'mongoose';

export interface IConfig extends Document {
    browsers: string[];
    src: string[];
    reporter:
        {
            name: string;
            output: string;
        };
    color: boolean;
    skipJsErrors: boolean;
}

const ConfigSchema: Schema = new Schema({
    browsers: {
        type: [String],
        required: true
    },
    src: {
        type: [String],
        required: true
    },
    reporter: {
        name: {type: String},
        output: {type: String, default: "./reports/report.json"}
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

export default mongoose.model<IConfig>('Config', ConfigSchema);