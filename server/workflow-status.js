
var assert = require('assert');
var WorkflowStatus = require('./models/workflow-status');

const Workflow_API_URL ='/api/v1/workflows';

module.exports = function(app){
    app.post(Workflow_API_URL,(req,res)=>{
        var workflowStatus = req.body;
        var newWorkflowStatus = new WorkflowStatus();
        newWorkflowStatus.status_desc = workflowStatus.status_desc;
        newWorkflowStatus.status_code = workflowStatus.status_code;
        var error = newWorkflowStatus.validateSync();
        if(!error){
            newWorkflowStatus.save(function(err, result) {
            if(err)
            res.status(500).json(err);
            res.status(201).json(result);
            });
        }else{
            res.status(500).json(error);
        }
        })
    app.get(Workflow_API_URL,(req,res)=>{
        query = { status_desc : {$regex: '.*.*'}};
        WorkflowStatus.find(query ,function (err, workflows) {
            if (err) {
                console.log(err);
                res.status(500).send(err); 
            }
            res.status(200).json(workflows);
            });
    })
    
}



























