import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Report = new Schema (
    //{field: { type: Type }, more fields}
);

export default mongoose.model('Report', Report);