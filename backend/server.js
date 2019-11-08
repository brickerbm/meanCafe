import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Config from './models/Config'
import Report from './models/Report'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://[server]/configs');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log('Express server running on port 4000'));

router.route('/configs').get((req, res) => {
    Config.find((err, configs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(configs);
        }
    });
});