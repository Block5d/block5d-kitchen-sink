var Promem = require('../models/projectMembers');

const PROMEMS_API_URL = '/api/v1/promems';

module.exports = function (app) {

    //CREATE PROMEM
    app.post(PROMEMS_API_URL, (req, res) => {
        var promem = req.body;
        var newPromem = new Promem();
        newPromem.project_id = promem.project_id;
        newPromem.person_id = promem.person_id;
        newPromem.company_id = promem.company_id;
        newPromem.isEnabled = true;
        newPromem.modified_date = promem.modified_date;
        newPromem.created_date = promem.created_date;
        newPromem.created_by = promem.created_by;
        newPromem.modified_by = promem.modified_by;
        var error = newPromem.validateSync();
        if (!error) {
            newPromem.save(function (err, result) {
                res.status(201).json(result);
            });
        } else {
            console.log(error);
            res.status(500).json(error);
        }

    });

    //READ USER
    app.get(PROMEMS_API_URL, (req, res) => {
        var query = {};
        Promem.find(query, (err, promems) => {
            if (err) {
                res.status(500).send(err);
                return;
            };

            res.status(200).json(promems);
        });
    });

    //UPDATE PROMEM
    app.put(PROMEMS_API_URL, (req, res) => {
        //console.log(req.body);
        let promem = req.body;
        let newPromem = new Promem();
        //newPromem._id = promem._id;
        newPromem.project_id = promem.project_id;
        newPromem.isEnabled = promem.isEnabled;
        newPromem.modified_date = promem.modified_date;
        newPromem.modified_by = promem.modified_by;
        console.log(promem.isEnabled)
        var error = newPromem.validateSync();
        if (!error) {
            //console.log(user._id);
            Promem.findByIdAndUpdate({ _id: promem._id }, { $set: promem }, { new: true }, (err, result) => {
                if (err) res.status(500).json(err);
                res.status(201).json(result);
            })
        }
    });



    // DELETE PROMEM
    app.delete(PROMEMS_API_URL, (req, res) => {
        var deletePromemId = req.query._id;
        Promem.findByIdAndRemove({ _id: deletePromemId }, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(result);
        })
    });

}
