var assert = require('assert');
var Webform = require('./../../models/webform');

const Webform_API_URL ='/api/v1/webforms';

module.exports = function(app){
    app.post(Webform_API_URL,(req,res)=>{
        console.log(req.body);
        var webform = req.body;
        console.log(webform);
        var NewWebform = new Webform();
        NewWebform.name = webform.name;
        NewWebform.content = webform.content;
        var error = NewWebform.validateSync();
        if(!error){
            NewWebform.save(function(err, result) {
            if(err)
            res.status(500).json(err);
            res.status(201).json(result);
            });
        }else{
            res.status(500).json(error);
        }
    })
}
