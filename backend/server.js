import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Config from './models/config.model';
import Report from './models/report.model';
import fs from 'fs';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/meancafe');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log('Express server running on port 4000'));

// Create new config/report
router.route('/configs/add').post((req, res) => {
    let config = new Config(req.body);
    config.save()
        .then(config => {
            res.status(200).json({'config': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new config');
        });
});

router.route('/reports/add').post((req, res) => {
    let report = new Report(req.body);
    report.save()
        .then(report => {
            res.status(200).json({'config': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new config');
        });
});

// Read all configs/reports
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

// Read specific config/report
router.route('/configs/:id').get((req, res) => {
    Config.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(config);
        }
    });
});

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

// Update specific config/report
router.route('/configs/update/:id').post((req, res) => {
    Config.findById(req.params.id, (err, config) => {
        if (!config) {
            return next(new Error('Could not load Config'));
        }
        else {
            config.browsers = req.body.browsers;
            config.src = req.body.src;
            config.reporter.name = req.body.reporter.name;
            config.reporter.output = req.body.reporter.output;
            config.color = req.body.color;
            config.skipJsErrors = req.body.skipJsErrors;

            config.save().then(config => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/reports/update/:id').post((req, res) => {
    Report.findById(req.params.id, (err, report) => {
        if (!report) {
            return next(new Error('Could not load Report'));
        }
        else {
            report.startTime = req.body.startTime;
            report.endTime = req.body.endTime;
            report.userAgents = req.body.userAgents;
            report.passed = req.body.passed;
            report.total = req.body.total;
            report.skipped = req.body.skipped;
            report.failed = req.body.failed;
            report.fixtures = req.body.fixtures;
            report.warnings = req.body.warnings;

            report.save().then(report => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// Delete specific config/report
router.route('/configs/delete/:id').get((req, res) => {
    Config.findByIdAndRemove({_id: req.params.id}, (err, config) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('Removed successfully');
        }
    });
});

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

// file writing
function writeFiles(path, objToWrite) {
    fs.writeFile(path, objToWrite, (err) => {
        if (err) throw err;
        console.log('Object written to ' + path);
    });
}