var Project = require('../../models/project');

const PROJECTS_API_URL = '/api/v1/projects';

module.exports = function (app) {

    //CREATE PROJECT
    app.post(PROJECTS_API_URL, (req, res) => {
        //console.log(req.body);
        var project = req.body;
        var newProject = new Project();
        var now = new Date();
        newProject.name = project.name;
        newProject.start_date = project.start_date;
        newProject.end_date = project.end_date;
        newProject.project_members.client_company = project.client_company;
        newProject.project_members.project_manager_person = project.project_manager_person;
        newProject.project_members.architect_person = project.architect_person;
        newProject.project_members.design_architect_person = project.design_architect_person;
        newProject.project_members.quantity_surveyor_person = project.quantity_surveyor_person;
        newProject.project_members.cs_engineer_person = project.cs_engineer_person;
        newProject.project_members.service_engineer_person = project.service_engineer_person;
        newProject.project_members.main_contractor_company = project.main_contractor_company;
        newProject.project_members.subcontractors = project.subcontractors;
        newProject.project_members.suppliers = project.suppliers;
        newProject.contacts.contact_no = project.contact_no;
        newProject.contacts.company_email = project.company_email;
        newProject.contacts.fax_no = project.fax_no;
        newProject.project_country = project.project_country;
        newProject.project_progress.site_possession = project.site_possession;
        newProject.project_progress.completion_date = project.completion_date;
        newProject.project_progress.contract_currency = project.contract_currency;
        newProject.project_progress.contract_sum = project.contract_sum;
        newProject.project_progress.contract_duration_base = project.contract_duration_base;
        newProject.project_progress.contract_duration_remaining = project.contract_duration_remaining;
        newProject.project_progress.pct_work_done = project.pct_work_done;
        newProject.project_progress.remarks = project.remarks;
        newProject.project_progress.site_issues = project.site_issues;
        newProject.project_progress.modified_date = project.modified_date;
        newProject.project_progress.created_date = project.created_date;
        newProject.project_progress.created_by = project.created_by;
        newProject.project_progress.modified_by = project.modified_by;
        newProject.project_monitoring.desc = project.desc;
        newProject.project_monitoring.planned_start_date = project.planned_start_date;
        newProject.project_monitoring.actual_start_date = project.actual_start_date;
        newProject.project_monitoring.planned_end_date = project.planned_end_date;
        newProject.project_monitoring.actual_end_date = project.actual_end_date;
        newProject.project_monitoring.pct_completed_planned = project.pct_completed_planned;
        newProject.project_monitoring.pct_completed_actual = project.pct_completed_actual;
        newProject.project_monitoring.pct_completed_1wktarget = project.pct_completed_1wktarget;
        newProject.project_monitoring.remark = project.remark;
        newProject.project_monitoring.modified_date = project.modified_date;
        newProject.project_monitoring.created_date = project.created_date;
        newProject.project_monitoring.created_by = project.created_by;
        newProject.project_monitoring.modified_by = project.modified_by;
        newProject.modified_date = project.modified_date;
        newProject.created_date = project.created_date;
        newProject.created_by = project.created_by;
        newProject.modified_by = project.modified_by;
        var error = newProject.validateSync();
        if (!error) {
            newProject.save(function (err, result) {
                res.status(201).json(result);
            });
        } else {
            console.log(error);
            res.status(500).json(error);
        }

    });

      //SEARCH & GET PROJECTS
  app.get(PROJECTS_API_URL, (req, res)=>{
    var query = {};
    var keyword = req.query.keyword;
    var type = req.query.type;
    let currentPerPage = req.query.currentPerPage;
    let itemsPerPage = req.query.itemsPerPage;
    console.log(req.query);
    //console.log(type);
    if(typeof keyword == 'undefined'){
      keyword = "";
    }
    if(type == 'name'){ 
      query = { 'name': {$regex: '.*' + keyword + '.*'}};
    }
    if(type == 'project_country'){ 
      query = { 'project_country': {$regex: '.*' + keyword + '.*'}};
    }
    Project.find(query ,(err, projects) =>{

      if (err) {
        //console.log(err);
        res.status(500).send(err);
      }
      res.status(200).json(projects);
    });
  });


    // UPDATE PROJECT
    app.put(PROJECTS_API_URL, (req, res)=>{
        //console.log(req.body);
        let project = req.body;
        let newProject = new Project();
        newProject._id = project._id;
        newProject.name = project.name;
        newProject.start_date = project.start_date;
        newProject.end_date = project.end_date;
        newProject.project_members.client_company = project.client_company;
        newProject.project_members.project_manager_person = project.project_manager_person;
        newProject.project_members.architect_person = project.architect_person;
        newProject.project_members.design_architect_person = project.design_architect_person;
        newProject.project_members.quantity_surveyor_person = project.quantity_surveyor_person;
        newProject.project_members.cs_engineer_person = project.cs_engineer_person;
        newProject.project_members.service_engineer_person = project.service_engineer_person;
        newProject.project_members.main_contractor_company = project.main_contractor_company;
        newProject.project_members.subcontractors = project.subcontractors;
        newProject.project_members.suppliers = project.suppliers;
        newProject.contacts.contact_no = project.contact_no;
        newProject.contacts.company_email = project.company_email;
        newProject.contacts.fax_no = project.fax_no;
        newProject.project_country = project.project_country;
        newProject.project_progress.site_possession = project.site_possession;
        newProject.project_progress.completion_date = project.completion_date;
        newProject.project_progress.contract_currency = project.contract_currency;
        newProject.project_progress.contract_sum = project.contract_sum;
        newProject.project_progress.contract_duration_base = project.contract_duration_base;
        newProject.project_progress.contract_duration_remaining = project.contract_duration_remaining;
        newProject.project_progress.pct_work_done = project.pct_work_done;
        newProject.project_progress.remarks = project.remarks;
        newProject.project_progress.site_issues = project.site_issues;
        newProject.project_progress.modified_date = project.modified_date;
        newProject.project_progress.modified_by = project.modified_by;
        newProject.project_monitoring.desc = project.desc;
        newProject.project_monitoring.planned_start_date = project.planned_start_date;
        newProject.project_monitoring.actual_start_date = project.actual_start_date;
        newProject.project_monitoring.planned_end_date = project.planned_end_date;
        newProject.project_monitoring.actual_end_date = project.actual_end_date;
        newProject.project_monitoring.pct_completed_planned = project.pct_completed_planned;
        newProject.project_monitoring.pct_completed_actual = project.pct_completed_actual;
        newProject.project_monitoring.pct_completed_1wktarget = project.pct_completed_1wktarget;
        newProject.project_monitoring.remark = project.remark;
        newProject.project_monitoring.modified_date = project.modified_date;
        newProject.project_monitoring.modified_by = project.modified_by;
        newProject.modified_date = project.modified_date;
        newProject.modified_by = project.modified_by;
        var error = newProject.validateSync();
        //console.log(newPerson);
        
        if(!error){
          //console.log(user._id);
          Project.findByIdAndUpdate({_id: project._id},{ $set: newProject }, { new: true }, (err, result)=>{
            if (err) res.status(500).json(err);
            res.status(201).json(result);
          })
        }
      });

    // DELETE PROJECT
    app.delete(PROJECTS_API_URL, (req, res)=>{
        //console.log("delete ... user ");
        //console.log(req);
        var deleteProjectId = req.query._id;
        //console.log(deleteUserId);
        Project.findByIdAndRemove({_id: deleteProjectId},(err,result)=>{
          if(err){
            res.status(500).send(err);
          }
          res.status(200).json(result);
       })
      });
  

}
