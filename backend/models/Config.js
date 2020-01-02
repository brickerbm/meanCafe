import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Config = new Schema ({
    browsers: {
        type: Array,
        default: ['all:headless']
    },
    src: {
        type: Array,
        default: ['./testing/fixtures']
    },
    reporter: [
        {
            name: {
                type: String,
                default: 'JSON'
            },
            output: {
                type: String,
                default: './testing/report.json'
            }
        }
    ],
    color: {
        type: Boolean,
        default: true
    },
    skipJsErrors: {
        type: Boolean,
        default: true
    }
}
    //{field: { type: Type }, more fields}
);

export default mongoose.model('Config', Config);