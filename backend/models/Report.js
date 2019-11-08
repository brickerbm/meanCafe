import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Report = new Schema ({
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    userAgents: {
        type: Array
    },
    passed: {
        type: Number
    },
    total: {
        type: Number
    },
    skipped: {
        type: Number
    },
    fixtures: {
        type: Array
    },
    
}
    //{field: { type: Type }, more fields}
);

export default mongoose.model('Report', Report);