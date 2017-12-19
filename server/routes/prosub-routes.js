var Prosub = require('../models/projectSubmissions');

const PROSUBS_API_URL = '/api/v1/prosubs';

module.exports = function(app){

    //CREATE PROSUB
  app.post(PROSUBS_API_URL, (req, res)=>{
    //console.log(req.body);
    var prosub = req.body;
    var newProsub = new Prosub();
    var now = new Date();
    newProsub.description = prosub.description;
    newProsub.authority = prosub.authority;
    newProsub.project_id = prosub.project_id;
    newProsub.planned_submission_date = prosub.planned_submission_date;
    newProsub.first_submission_date = prosub.first_submission_date;
    newProsub.second_submission_date = prosub.second_submission_date;
    newProsub.type = prosub.type;
    newProsub.status = prosub.status;
    newProsub.modified_date = now;
    newProsub.created_date = now;
    var error = newProsub.validateSync();
    if(!error){
        newProsub.save(function(err, result) {
        res.status(201).json(result);
      });
    }else{
      console.log(error);
      res.status(500).json(error);
    }
      
  });
}
