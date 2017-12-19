var assert = require('assert');
var Workflow = require('./../models/workflow');

const Workflow_Submit_API_URL ='/api/v1/workflowsSubmit';

module.exports = function(app){
    app.post(Workflow_Submit_API_URL,(req,res)=>{
        var workflow = req.body;
        console.log(11111111111);
        console.log(workflow);
        var newWorkflow = new Workflow();
        newWorkflow.project_id = workflow.project_id;
        newWorkflow.workflows.from_status = workflow.from_status;
        newWorkflow.workflows.to_status = workflow.to_status;
        newWorkflow.workflows.rules = workflow.rules;
        newWorkflow.workflows.action = workflow.action;
        newWorkflow.createdAt =new Date();
        var error = newWorkflow.validateSync();
        if(!error){
            newWorkflow.save(function(err, result) {
            if(err)
            res.status(500).json(err);
            res.status(201).json(result);
            });
        }else{
            res.status(500).json(error);
        }
        })

}
