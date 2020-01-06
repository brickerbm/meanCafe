import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Config from './models/config.model';
import Report from './models/report.model';
import fs from 'fs';

var spawn = require('child_process').spawn;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/meancafe');

const connection = mongoose.connection;

// Log that connection has been established
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log('Express server running on port 4000'));

// Write config file to .testcaferc.json, run "testcafe" as child process, write report.json to DB as json obj
router.route('/config/write').post((req, res) => {
    let data = JSON.stringify(req.body);
    // console.log(data);
    fs.writeFile('./.testcaferc.json', data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send('Config file successfully saved!');
            const child = spawn('testcafe');
            child.on('close', (msg) => {
                console.log('finished running tests');
                let rawData = fs.readFileSync('./testing/report.json');
                let report = JSON.parse(rawData);
                console.log(report);
                connection.collection('reports').insert(report), (err) => {
                    if (err) {
                        console.log('Error saving report to database'); 
                    } else {
                        console.log('Report successfully saved');
                    }
                };
            });
        }
    });
});

// Read all reports
router.route('/reports').get((req, res) => {
    Report.find((err, reports) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(reports);
        }
    });
});

// Read all fixture filenames in testing/fixtures dir
router.route('/fixtures').get((req, res) => {
    fs.readdir('./testing/fixtures', (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

// Read specific report
router.route('/reports/:id').get((req, res) => {
    Report.findById(req.params.id, (err, report) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(report);
        }
    });
});

// Delete a report by ID
router.route('/reports/delete/:id').get((req, res) => {
    Report.findByIdAndRemove({_id: req.params.id}, (err, report) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('Removed successfully');
        }
    });
});
