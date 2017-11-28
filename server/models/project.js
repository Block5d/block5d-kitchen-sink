var mongoose = require('mongoose');

module.exports = mongoose.model('project', {
    name: String,
    start_date: Date,
    end_date: Date,
    project_members:{
        client_company: String,
        project_manager_person: String,
        architect_person: String,
        design_architect_person: String,
        quantity_surveyor_person: String,
        cs_engineer_person: String,
        service_engineer_person: String,
        main_contractor_company: String,
        subcontractors: Array,
        suppliers: Array
    },
    contacts: {
        contact_no: Number,
        company_email: String,
        fax_no: Number
    },
    project_country: String,
    project_progress: Array[{
        site_possession: String,
        completion_date: Date,
        contract_currency: String,
        contract_sum: Number,
        contract_duration_base: String,
        contract_duration_remaining: String,
        pct_work_done: Number,
        remarks: Array,
        site_issues: Array,
        modified_date: Date,
        created_date: Date,
        created_by: String,
        modified_by: String
    }],
    project_monitoring:Array[{
        desc: String,
        planned_start_date: Date,
        actual_start: Date,
        planned_end_date: Date,
        actual_end_date: Date,
        pct_completed_planned: Number,
        pct_completed_actual: Number,
        pct_completed_1wktarget: Number,
        remark: String, modified_date: Date,
        created_date: Date,
        created_by: String,
        modified_by: String
    }],
    modified_date: Date,
    created_date: Date,
    created_by: String,
    modified_by: String

});