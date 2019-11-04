import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Config = new Schema ({
    browsers: {
        type: Array,
        default: ['chrome:headless']
    },
    src: {
        type: Array,
        default: ['./e2e/src']
    },
    reporter: [
        {
            name: {
                type: String,
                default: 'spec'
            }
        },
        {
            name: {
                type: String,
                default: 'JSON'
            },
            output: {
                type: String,
                default: './src/assets/report.json'
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